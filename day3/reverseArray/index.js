/* Reverse an array */

/*
 *  Write a function to reverse an array.
 */

/* eg:
 * reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
 * reverse([9, 9, 2, 3, 4]) -> [4, 3, 2, 9, 9]
 * reverse([]) -> []
 */

/* link to the problem: https://www.udemy.com/course/javascrip-80-coding-challenges/learn/quiz/5538624#questions

/*
 *
 * SOLUTION
 *
 */

const reverse = arr => arr.reverse();

console.log(reverse([1, 2, 3, 4]));
console.log(reverse([9, 9, 2, 3, 4]));
console.log(reverse([]));

console.log('-----------');

/*
 *
 * SOLUTION2
 *
 */

const reverse2 = (arr) => {
  let i = 0;
  while (i < arr.length - 1) {
    arr.splice(i, 0, arr.pop());
    i++;
  }
  return arr;
}

console.log(reverse2([1, 2, 3, 4]));
console.log(reverse2([9, 9, 2, 3, 4]));
console.log(reverse2([]));
