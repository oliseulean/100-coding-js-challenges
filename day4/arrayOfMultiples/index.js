/* Array of multiples */

/*
 *  Create a function that takes two numbers as arguments (num, length) and
 *  returns an array of multiples of num until the array length reaches length.
 */

/* eg:
 * arrayOfMultiples(7, 5) => [7, 14, 21, 28, 35];
 * arrayOfMultiples(17, 6) => [17, 34, 51, 68, 85, 102];
 */

/* link to the problem: https://www.udemy.com/course/javascrip-80-coding-challenges/learn/quiz/5538638#questions

/*
 *
 * SOLUTION
 *
 */

const arrayOfMultiples = (num, length) => {
  let output = [];
  let multiple = 0;
  let i;

  for (i = 1; i < length + 1; i++) {
    multiple = num * i;
    output.push(multiple);
  }
  return output;
};
console.log(arrayOfMultiples(7, 5));