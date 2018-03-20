/*
 * Given an array of integers, find the sum of its elements.
 * 
 * Complete the SIMPLEARRAYSUM function which takes 2 arguments, an integer N
 * and an integer array AR and returns an integer denoting the sum of all array elements
 * 
 * Raw Input Format
 * The first line contains an integer, N, denoting the size of the array.
 * The second line contains  space-separated integers representing the array's elements.
 * 
 */

/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
    var sum_of_array_elements = 0

    // forEach through array
    ar.forEach(element => {
        sum_of_array_elements += element
    });

    return sum_of_array_elements
}