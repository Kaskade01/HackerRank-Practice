/*
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
 * 
 * Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is
 * 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
 * 
 * Complete the timeConversion() function which takes 1 argument, a string S and returns a
 * string denoting the 24-hr formatted time.
 * 
 * Raw Input Format:
 * A single string S containing a time in 12-hour clock format (i.e hh:mm:ssAM or
 * hh:mm:ssPM), where 01 <= hh <= 12 and 00 <= mm,ss <= 59.
 * 
 */


function timeConversion(s) {
    // split string between ":"
    var standardtime = s.split(":")
    var standardHour = standardtime[0]
    var standardMinute = standardtime[1]
    var standardSecond = standardtime[2][0] + standardtime[2][1]
    var militaryHour, militaryMinute, militarySecond

    // look at first letter of AM/PM to determine if before noon
    var is_before_noon = ((standardtime[2][2] === "A") ? true : false)

    if(is_before_noon){
        militaryHour = (standardHour === "12") ? "00" : standardHour
        militaryMinute = standardMinute
        militarySecond = standardSecond
    } else {
        militaryHour = (standardHour === "12") ? "12" : String(12 + parseInt(standardHour))
        militaryMinute = standardMinute
        militarySecond = standardSecond
    }

    return militaryHour+":"+militaryMinute+":"+militarySecond
}