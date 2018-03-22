/*
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 * 
 * Complete the diagonalDifferece() function which takes a 2D integer array as a 
 * parameter and return an integer denoting the absolute difference bwetween the diagonal
 * sums.
 * 
 * Constraints:
 * -100 <= elements in the matrix <= 100
 * 
 * Raw Input Format:
 * The first line contains a single integer, N denoting the number of rows and columns
 * in the matrix A
 * 
 * The next N lines denote the matrix A's rows, with each line containing N space-separated
 * integers describing the columns.
 * 
 */

 /*
 * Complete the diagonalDifference function below.
 */
function diagonalDifference(a) {
    var matrix_size = a[0].length // assume row = height
    var matrix_x, matrix_y
    var diagonal_sum_01 = 0
    var diagonal_sum_02 = 0

    // get first diagonal sum
    matrix_x = 0
    matrix_y = 0
    while (matrix_x < matrix_size && matrix_y < matrix_size){
        diagonal_sum_01 += a[matrix_y][matrix_x]
        matrix_x++
        matrix_y++
    }

    // get second diagonal sum
    matrix_x = matrix_size-1
    matrix_y = 0
    while (matrix_x >= 0 && matrix_y < matrix_size){
        diagonal_sum_02 += a[matrix_y][matrix_x]
        matrix_x--
        matrix_y++
    }

    return Math.abs(diagonal_sum_01 - diagonal_sum_02)
}