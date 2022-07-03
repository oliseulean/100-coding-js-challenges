/* Highest Digit */

/*
 * Create a function that takes a number as an argument and returns
 * the highest digit in that number.
 */

/* eg:
 *  highestDigit(379) => 9
 *  highestDigit(377401) => 7
 *
 */

/* link to the problem: https://www.udemy.com/course/javascrip-80-coding-challenges/learn/quiz/5539426#questions/17478802 */

/*
 *
 * SOLUTION
 *
 */

const highestDigit = number => Math.max(...`${number}`);

console.log(highestDigit(379));
console.log(highestDigit(377401));
