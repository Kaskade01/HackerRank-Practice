/*
 * You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a
 * number line ready to jump in the positive directio (i.e, toward positive infinity).
 * 
 * + The first kangaroo starts at location x_1 and moves at a rate of v_1 meters per jump.
 * + The second kagaroo starts at locatin x_2 and moves at a rate of v_2 meters per jump.
 * 
 * You have to figure out a way to get both kagaroos at the same location as part of the show.
 * 
 * Complete the function kagaroo() which takes starting locatino and speed of both kagaroos as input, and
 * return YES or NO appropriately. Can you determine if the kagaroos will ever land at the same location at
 * the same time? The two kagaroos must land at the same locatino after making the same number of jumps.
 * 
 * Input Format:
 * + 4 space-separated integers
 *   - x_1, v_1, x_2, v_2: starting locatinos x_roo and meters per jump v_roo for kangaroos 1 and 2
 *   - 0 <= x_1 < x_2 <= 10000
 *   - 1 <= v_1, v_2 <= 10000
 * 
 * Output Format:
 * Print YES if they can land on the same locaitno at the same time. Otherwise, print NO.
 * 
 */

function kangaroo(x1, v1, x2, v2) {
    var kangaroo_1_start = x1
    var kangaroo_2_start = x2
    var kangaroo_1_speed = v1
    var kangaroo_2_speed = v2
    var YES_MESSAGE = "YES"
    var NO_MESSAGE = "NO"

    // case 1: same location, same speed
    // case 2: same location, different speed
    // case 3: different location, same speed
    // case 4: different location, different speed
    if(kangaroo_1_start === kangaroo_2_start && kangaroo_1_speed === kangaroo_2_speed){
        return YES_MESSAGE 
    } else if (kangaroo_1_start === kangaroo_2_start && kangaroo_1_speed != kangaroo_2_speed){
        return NO_MESSAGE
    } else if (kangaroo_1_start != kangaroo_2_start && kangaroo_1_speed === kangaroo_2_speed){
        return NO_MESSAGE
    } else if (kangaroo_1_start != kangaroo_2_start && kangaroo_1_speed != kangaroo_2_speed){
        // case 4a: k1 starts ahead & is faster
        // case 4b: k2 starst ahead & is faster
        // else: the slower kangaroo starts ahead
        if(kangaroo_1_start > kangaroo_2_start && kangaroo_1_speed > kangaroo_2_speed){
            return NO_MESSAGE
        } else if (kangaroo_2_start > kangaroo_1_start && kangaroo_2_speed > kangaroo_1_speed){
            return NO_MESSAGE
        } else {
            // bruteforce solution
            if (kangaroo_1_start > kangaroo_2_start){
                var kangaroo_1_location = kangaroo_1_start
                var kangaroo_2_location = kangaroo_2_start
                while(kangaroo_1_location > kangaroo_2_location){
                    if(kangaroo_1_location === kangaroo_2_location){
                        return YES_MESSAGE
                    }
                    kangaroo_1_location += kangaroo_1_speed
                    kangaroo_2_location += kangaroo_2_speed
                }
            } else if(kangaroo_2_start >= kangaroo_1_start){ 
                var kangaroo_1_location = kangaroo_1_start
                var kangaroo_2_location = kangaroo_2_start
                while(kangaroo_2_location >= kangaroo_1_location){
                    if(kangaroo_1_location === kangaroo_2_location){
                        return YES_MESSAGE
                    }
                    kangaroo_1_location += kangaroo_1_speed
                    kangaroo_2_location += kangaroo_2_speed
                }
            }
            return NO_MESSAGE
        }

    }
    return "ERROR"
}