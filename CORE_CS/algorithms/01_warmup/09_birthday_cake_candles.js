/*
 * You are in charge of the cake for your niece's birthday and have decided the cake will have
 * one candle for each year of her total age. When she blows out the candles, she'll only be able
 * to blow out the tallest ones.
 * 
 * For example, if your niece is turning 4 years old, and the cake will have 4 candles of height 3,
 * 2, 1, 3, she will be able to blow out 2 candles successfully, since the tallest candle is of height
 * 3 and there are 2 such candles.
 * 
 * Complete the function birthdayCakeCandles() that takes your niece's age and an integer
 * array containing height of each candle as input, and return the number of candles she can
 * successfully blow out.
 * 
 * Input Format:
 * + integer
 *    - coleen's age N
 *    - 1 <= N <= 10^5
 * + N space-separated integers
 *    - candle heights height_i
 *    - 1 <= height_i <= 10^7
 * 
 * Output Format:
 * Print thenumber of candles Colleen blows out.
 * 
 */

function birthdayCakeCandles(n, ar) {
    var candle_dictionary = {}
    var biggest_candle_height = 0

    ar.forEach(height => {
        var height_string = height.toString()

        // keep track of candles per height with assoc. array
        if( (height_string in candle_dictionary) ){
            candle_dictionary[height_string] = candle_dictionary[height_string] + 1 
        } else {
            candle_dictionary[height_string] = 1
        }
        // keep track of biggest height
        if(height > biggest_candle_height){
            biggest_candle_height = height
        }
    });

    return candle_dictionary[biggest_candle_height]
}