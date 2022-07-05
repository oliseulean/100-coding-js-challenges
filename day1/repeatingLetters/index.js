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
 * SOLUTION 1
 *
 */

const doubleChar = str => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
};

console.log('--SOLUTION 1--');
console.log(doubleChar('Hello World!'));
console.log(doubleChar('1234!_ '));

/*
 *
 * SOLUTION 2
 *
 */

const doubleChar2 = (str) => {
  const arr = str.split(''); // split the string
  const doublingTheLetter = arr.map(item => item + item); // double the letter with map
  const joinTheLettersTogether = doublingTheLetter.join(''); // join all letters together
  return joinTheLettersTogether;
}

console.log('--SOLUTION 2--');
console.log(doubleChar2('Hello World!'));
console.log(doubleChar2('1234!_ '));

/*
 *
 * SOLUTION 3
 *
 */

const doubleChar3 = (str) => {
  const spreadString = [...str];
  const repeatTheLetter = spreadString.map(letter => letter.repeat(2));
  const joinTheLettersTogether = repeatTheLetter.join('');
  return joinTheLettersTogether;

  /* this solution inline */
  // return [...str].map(letter => letter.repeat(2).join(''));

  /* instead of using spread syntax you can use
   * .split --> str.split('');
   */
}

console.log('--SOLUTION 3--');
console.log(doubleChar3('Hello World!'));
console.log(doubleChar3('1234!_ '));