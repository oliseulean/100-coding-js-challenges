/* Word numbers */

/*
 *  Create a function that returns a number, based on the string provided. Here is a list off all digits:
 *  StringNumber"one"1"two"2"three"3"four"4"five"5"six"6"seven"7"eight"8"nine"9"zero"0
 */

/* eg:
 * word('one') -> 1;
 * word('nine) -> 9;
 */

/* link to the problem: https://www.udemy.com/course/javascrip-80-coding-challenges/learn/lecture/31757036#questions

/*
 *
 * SOLUTION
 *
 */

const word = s => {
  if (s === 'zero') return 0;
  if (s === 'one') return 1;
  if (s === 'two') return 2;
  if (s === 'three') return 3;
  if (s === 'four') return 4;
  if (s === 'five') return 5;
  if (s === 'six') return 6;
  if (s === 'seven') return 7;
  if (s === 'eight') return 8;
  if (s === 'nine') return 9;
};

console.log(word('one'));
console.log(word('nine'));

console.log('-----------');

/*
 *
 * SOLUTION2
 *
 */

const word2 = s => {
  const numbersInWords = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  return numbersInWords.indexOf(s);
};

console.log(word2('three'));
console.log(word2('four'));

console.log('-----------');
