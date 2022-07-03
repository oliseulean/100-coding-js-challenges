/* Sort an array by string length */

/*
 * Create a function that takes an array of strings and return
 * an array, sorted from shortest to longest.
 */

/* eg:
 *  sortByLength(['Google', 'Apple', 'Microsoft']) => ['Apple', 'Google', 'Microsoft'];
 *  sortByLength(['Leonardo', 'Michelangelo', 'Raphael', 'Donatello']) => ['Apple', 'Google', 'Microsoft'];
 */

/* link to the problem: https://www.udemy.com/course/javascrip-80-coding-challenges/learn/quiz/5539432#questions/17478802 */

/*
 *
 * SOLUTION
 *
 */

const sortByLength = arr => arr.sort((a, b) => a.length - b.length);

console.log(sortByLength(['Google', 'Apple', 'Microsoft']));
console.log(sortByLength(['Leonardo', 'Michelangelo', 'Raphael', 'Donatello']));
