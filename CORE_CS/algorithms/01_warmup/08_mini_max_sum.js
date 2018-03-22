/*
 * Given five positive integers, find the minimum and maximum values that can be calculated by
 * summing exactly four of the five integers. Then print the respective minimum and maximum
 * values as a single line of two space-separted long integers.
 * 
 * Input Format:
 * A single line of five space-separated integers.
 * 
 * Constraints:
 * Each integer is in the inclusive range [1...10^9].
 * 
 * Output Format:
 * Print two space-separated long integers denoting the respective minimum and maximum
 * values that can be calculated by summing exactly four of the five integers. (The output can be
 * greater than a 32 bit integer.)
 * 
 */

function miniMaxSum(arr) {
    // use built in JS sort
    arr.sort()

    var min_sum = arr[0] + arr[1] + arr[2] + arr[3]
    var max_sum = arr[1] + arr[2] + arr[3] + arr[4]

    console.log(min_sum, max_sum)
}