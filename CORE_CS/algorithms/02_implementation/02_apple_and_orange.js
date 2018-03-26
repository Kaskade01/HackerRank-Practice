/*
 * Sam's house has an apple tree and an orange tree that yield an abundance of fruit. In the
 * diagram below, the red region denotes his house, where S is the start point, and T is the 
 * endpoint. THe apple tree is to the left of his house, and the orange tree is to its right. You can
 * assume the trees are located on a single point, where the apple tree is at point A, and the 
 * ornage tree is at point B.
 * 
 * Diagram: https://s3.amazonaws.com/hr-challenge-images/25220/1474218925-f2a791d52c-Appleandorange2.png
 * 
 * When a fruit falls from its tree, it lands D units of distance from its tree of origin along the x-
 * axis. A negative value of D means the fruit fell D units to the tree's left, and a positive value of 
 * D means it falls D units to the tree's right.
 * 
 * Complete the function countApplesAndOranges(),
 * 
 * where,
 * S - Starting point of Sam's house location
 * T - Ending locaiton of Sam's house locaiton
 * A - Location of the Apple tree
 * B - Location of the Orange tree
 * M - Number of apples that fell from the tree
 * apples - Distance at which each apple falls from the tree.
 * N - Number of oranges that fell from the tree
 * oranges - Distance at which each orange falls from the tree
 * 
 * Given value of D for M apples and N orages, can you determine how many apples and
 * oranges will fall on Sam's house (i.e., in the inclusive range [s,t])? Print the number of apples
 * on Sam's house as your second line of output.
 * 
 * Input Format:
 * + 2 space-separated integers
 *   - S and T, left and right sides of Sam's house
 *   - 1 <= S,T <= 10^5
 * + 2 space-separated integers
 *   - a and b, Larry's and Rob's positions in the trees
 *   - 1 <= a,b <= 10^5
 * + 2 space-separated integers
 *   - m and n, number of apples and oranges thrown
 *   - 1< <= mn, <= 10^5
 * + M space-separated integers
 *   - distances m_i that each apple falls from A
 *   - 10^5 <= m_i <= 10^5
 * + N space-separated integers
 *   - distances n_i that each orange falls from B
 *   - -10^5 <= n_i <= 10^5
 * 
 * Output Format:
 * 2 space-separated integers on a line: Larry's score followed by Rob's score.
 * 
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var number_of_apples_that_fall_on_house = 0
    var number_of_oranges_that_fall_on_house = 0
    apples.forEach(distance_from_tree => {
        var fall_location = (a<0) ? (distance_from_tree - Math.abs(a)) : (distance_from_tree + a)
        if(fall_location >= s && fall_location <= t){
            number_of_apples_that_fall_on_house++
        }
    });
    oranges.forEach(distance_from_tree => {
        var fall_location = (b<0) ? (distance_from_tree - Math.abs(b)) : (distance_from_tree + b)
        if(fall_location <= t && fall_location >= s){
            number_of_oranges_that_fall_on_house++
        }
    });
    console.log(number_of_apples_that_fall_on_house)
    console.log(number_of_oranges_that_fall_on_house)
}