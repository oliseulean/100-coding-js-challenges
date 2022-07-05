/* Currying Functions */

/*
 * Create a function which takes a array arr
 * of integers as an argument. This function must return another function,
 * which takes a single integer as an argument and returns a new array.
 * The returned array should consist of each of the elements from the first array multiplied by the integer.
 */

/* eg:
 * multiply([1, 2, 3])(2) ➞ [2, 4, 6]
 * multiply([4, 5, 6])(10) -> [40, 50, 60]
 * multiply([1, 2, 3])(0) -> [0, 0, 0]
 */

/* link to the problem: https://www.udemy.com/course/javascrip-80-coding-challenges/learn/quiz/5539440#questions/17478802*/

/*
 *
 * SOLUTION
 *
 */


const multiply = (arr, x) => (x) => arr.map(e => e * x);

console.log(multiply([1, 2, 3])(2));
console.log(multiply([4, 5, 6])(10));
console.log(multiply([1, 2, 3])(0));