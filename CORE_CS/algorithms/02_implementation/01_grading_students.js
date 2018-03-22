/*
 * HackerLand University has the following grading policy:
 * + Every student recieves a grade in the inclusive range from 0 to 100
 * + Any grade less than 40 is a failing grade.
 * 
 * Sam is a professor at the university and likes to round each student's grade according to these
 * rules:
 * + If the difference between the grade and the next multiple of 5 is less than 3, round grade
 *   up to the next multiple of 5.
 * + If the value of grade is less than 38, no rounding occurs as the result will still be failing
 *   grade.
 * 
 * For example, grade = 84 will be rounded to 85 but grade = 29 will not be rounded because
 * the rounding would result in a number that is less than 40.
 * 
 * Given the initial value of garde for ech of Sam's N students, write code to autmoate the
 * rounding process. Complete the function solve() that takes an integer array of all grades, and
 * return an integer array consisting of the rounded grades. For each grade_i, round it according
 * to the rules abovr and print the result on a new line.
 * 
 * Input Format:
 * First Line
 * + integer
 *   - N: number of students
 *   - 1 <= N <= 60
 * 
 * Next N lines
 * + integer
 *   - grades_i: individual grades
 *   - 0 <= grades_i <= 100
 * 
 * Output Format:
 * Print N lines, each with the rounded value of a student's grade in input order.
 * 
 */


function gradingStudents(grades) {
    var rounded_grades = []
    grades.forEach(grade => {
        if(grade < 38){
            rounded_grades.push(grade)
        } else if (grade >= 38) {
            var next_multiple = Math.ceil(grade/5) * 5
            if((next_multiple - grade) < 3){
                rounded_grades.push(next_multiple)
            } else {
                rounded_grades.push(grade)
            }
        }
    });

    return rounded_grades
}