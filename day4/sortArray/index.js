/* Let's sort this array */

/*
 *  Create a function that takes an array of numbers arr, a string str and return an array
 *  of numbers as per the following rules:
 *  asc -> returns a sorted array in ascending order.
 *  des -> returns a sorted array in descending order.
 *  none -> returns an array without any modification.
 */

/* eg:
 * ascDesNone([4, 3, 2, 1], 'Asc') => [1, 2, 3 , 4];
 * ascDesNone([7, 8, 11, 66], 'Desc') => [66, 11, 8 , 7];
 * ascDesNone([1, 2, 3, 4], 'None') => [1, 2, 3, 4];
 */

/* link to the problem: https://www.udemy.com/course/javascrip-80-coding-challenges/learn/quiz/5539446#questions

/*
 *
 * SOLUTION
 *
 */

const ascDesNone = (arr, str) => {
  if (str === 'Asc') return arr.sort((a, b) => a - b);
  if (str === 'Des') return arr.sort((a, b) => b - a);
  if (str === 'None') return arr;
};

console.log(ascDesNone([4, 3, 2, 1], 'Asc'));
console.log(ascDesNone([7, 8, 11, 66], 'Desc'));
console.log(ascDesNone([1, 2, 3, 4], 'None'));
