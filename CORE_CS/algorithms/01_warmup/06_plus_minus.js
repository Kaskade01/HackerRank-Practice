/*
 * Given an array of integers, calculate the fractions of its elements that are positive, negative,
 * and are zeros. Print the decimal value of each fraction on a new line.
 * 
 * Note: This challenge introduces precision problems. The test cases are scaled to six decimal
 * places, though answers with absolute error of up to 10^-4 are acceptable.
 * 
 * Input Format:
 * The first line contains an integer, N, denoting the size of the array.
 * The second line contains N space-seperated integers describing an array of numbers
 * arr(a_0,a_1,...,a_n-1)
 * 
 * Output Format:
 * You must print the following 3 lines:
 * 1. A decimal representing of the fraction of positive numbers in the array compared to its size.
 * 2. A decimal representing of the fraction of negative numbers in the array compared to its size.
 * 3. A decimal representing of the fraction of zeros in the array compared to its size.
 * 
 */

 /*
 * Complete the plusMinus function below.
 */
function plusMinus(arr) {
    var array_size = arr.length
    var positive_fraction = 0
    var negative_fraction = 0
    var zero_fraction = 0

    // foreach throuh array
    arr.forEach(number => {
        if(number > 0){
            positive_fraction++
        } else if (number < 0){
            negative_fraction++
        } else if (number === 0){
            zero_fraction++
        }
    });

    console.log(positive_fraction/array_size)
    console.log(negative_fraction/array_size)
    console.log(zero_fraction/array_size)
}
