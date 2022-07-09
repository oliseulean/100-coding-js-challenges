/* Invert an array */

/*
 *  Create a function that takes an array of numbers arr and
 *  returns an inverted array.
 */

/* eg:
 * invertArray([1, 2, 3, 4, 5]) -> [-1, -2, -3, -4, -5];
 * invertArray([]) -> [];
 */

/* link to the problem: https://www.udemy.com/course/javascrip-80-coding-challenges/learn/quiz/5538630#questions

/*
 *
 * SOLUTION
 *
 */

const invertArray = arr => {
  for (let index = 0; index < arr.length; index++) {
    arr[index] = arr[index] * -1;
  }
  return arr;
};

console.log(invertArray([1, 2, 3, 4, 5]));
console.log(invertArray([0]));

console.log('-----------');

/*
 *
 * SOLUTION2
 *
 */

const invertArray2 = arr => arr.map(elem => (elem = elem * -1));

console.log(invertArray2([1, 2, 3, 4, 5]));
console.log(invertArray2([0]));
