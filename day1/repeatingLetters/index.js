/* Repeating Letters */

/*
 * Create a function that takes a string and returns a string
 * in which each character is repeated once.
 */

/* eg:
 *  doubleChar('String') => 'SSttrriinngg';
 *  doubleChar('Hello World!') => 'HHeelllloo  WWoorrlldd!!';
 *  doubleChar('1234!_ ') => '11223344!!__  ';
 */

/* link to the problem: https://www.udemy.com/course/javascrip-80-coding-challenges/learn/quiz/5539424#questions/17478802 */

/*
 *
 * SOLUTION
 *
 */

const doubleChar = str => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
};

console.log(doubleChar('Hello World!'));
console.log(doubleChar('1234!_ '));
