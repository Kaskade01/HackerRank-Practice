/*
 * Consider a staircase of size N = 4
 *        #
 *       ##
 *      ###
 *     ####
 * 
 * Observe that its base and height equal to N, and the image is drawn using #
 * symbols and spaces. The last line is not preceded by any spaces.
 * 
 * Write a program that prints a staircase of size N.
 * 
 * Input Format:
 * A single integer, N, denoting the size of the staircase.
 * 
 * Output Format:
 * Print a staircase of size N using # symbols and spaces.
 * 
 * Note: The last line must have 0 spaces in it.
 * 
 */

 /*
 * Complete the staircase function below.
 */
function staircase(n) {
    var symbolCount = 1
    var spaceCount = n-1

    while (symbolCount <= n){
        var line = ""
        for(var i = 0; i < spaceCount; i++){
            line = line.concat(" ")
        }
        for(var i = 0; i < symbolCount; i++){
            line = line.concat("#")
        }
        symbolCount++
        spaceCount--
        console.log(line)
    }
}