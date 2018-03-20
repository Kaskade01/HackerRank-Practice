/*
 * Alice and Bob each created one problem for HackerRank. A reviewer rates the 
 * two challenges, awarding points on a scale from 1 to 100 for three categories: 
 * problem clarity, originality, and difficulty.
 * 
 * We define the rating for Alice's challenge to be the triplet A=(a_0,a_1,a_2), and 
 * the rating for Bob's challenge to be the triplet B=(b_0,b_1,b_2).
 * 
 * Your task is to find their comparison points by comparing a_0 with b_0, a_1 with b_1, and a_2 with b_2.
 * If a_i > b_i, then Alice is awarded 1 point.
 * If a_i < b_i, then Bob is awarded 1 point.
 * If a_i = b_i, then neither person receives a point.
 * 
 * Comparison points is the total points a person earned.
 * Given A and B, can you compare the two challenges and print their respective comparison points?
 * 
 * Input Format:
 * The first line contains 3 space-separated integers, a0, a1, and a2, describing the respective values in triplet A.
 * The second line contains 3 space-separated integers, b0, b1, and b2, describing the respective values in triplet B.
 * 
 * Constraints:
 * 1 <= a_i <= 100
 * 1 <= b_i <= 100
 * 
 * Output Format:
 * Print two space-separated integers denoting the respective comparison points earned by Alice and Bob.
 * 
 */

 /*
 * Complete the solve function below.
 */
function solve(a0, a1, a2, b0, b1, b2) {
    var personA_points = 0
    var personB_points = 0

    if (a0 > b0){
        personA_points += 1
    } else if (a0 < b0){
        personB_points += 1
    }
    
    if (a1 > b1){
        personA_points += 1
    } else if (a1 < b1){
        personB_points += 1
    }

    if (a2 > b2){
        personA_points += 1
    } else if (a2 < b2){
        personB_points += 1
    }

    // solution expects answer in array because it uses .join to output correct result
    return [personA_points, personB_points]
}