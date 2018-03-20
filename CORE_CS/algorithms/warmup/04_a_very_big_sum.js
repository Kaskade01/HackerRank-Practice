/*
 * Calculate and print the sum of the elements in an array, keeping in mind that some of those
 * integers may be quite large.
 * 
 * Complete the function aVeryBigSum() which takes 2 arguments, an integer N and a long
 * integer array ar and returns a long integer denoting the sum of all array elements
 * 
 * Constraints:
 * 1 <= N <= 10
 * 0 <= ar[i] <= 10^10
 * 
 * Raw Input Format:
 * The first line of the input consists of an integer N.
 * The next line contains N space-separated integers contained in the array.
 * 
 * Note:
 * The range of the 32-bit integer is (-2^31) to (2^31-1)
 * 
 */

/*
 * Complete the aVeryBigSum function below.
 */
function aVeryBigSum(n, ar) {
    var result = 0

    // numbers in JS are 64-bit so there is no need to convert
    ar.forEach(number => {
        result += number
    });

    return result
}