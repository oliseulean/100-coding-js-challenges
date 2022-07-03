/* Filter out Strings from an Array */

/* 
 * Create a function that takes an array of non-negative integers
 * and strings and return a new array without the strings.
 */

/* eg:
 *  filterArray([1, 2, 'a', 'b']) => [1, 2];
 *  filterArray([1, 'a', 'b', 0, 15]) => [1, 0, 15];
 */

/* link to the problem: https://www.udemy.com/course/javascrip-80-coding-challenges/learn/quiz/5539416#questions/17478802 */

/*
 *
 * SOLUTION
 *
 */


const filterArray = (arr) => arr.filter((item) => !(typeof item === 'string'));

console.log(filterArray([1, 2, 'a', 'b']));
console.log(filterArray([1, 'a', 'b', 0, 15]));