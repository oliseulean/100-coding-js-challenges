/* Check Relation */

/*
 * In this challenge you will be given a relation between two numbers,
 * written as a string. Write a function that determines
 * if the relatios is true or false.
 */

/* eg:
 * isTrue("2=2") ➞ true
 * isTrue("8<7") ➞ false
 * isTrue("5=13") ➞ false
 * isTrue("15>4") ➞ true
 */

/* link to the problem: https://www.udemy.com/course/javascrip-80-coding-challenges/learn/quiz/5539438#questions/17478802 */

/*
 *
 * SOLUTION
 *
 */


const isTrue = (relation) => eval(relation.replace('=', '==='))

console.log(isTrue("2=2"));
console.log(isTrue("8<7"));