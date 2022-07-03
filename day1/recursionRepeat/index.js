/* Recursion to Repeat a String n Number of Times */

/*
 * Create a recursive function that takes two parameters and repeats the string n number of times.
 * The first parameter txt  is the string to be repeated and the second parameter is the number of
 * times the string is to be repeated.
 * NOTE!! String.prototype.repeat() isn't allowed.
 */

/* eg:
 * repetition('ab', 2) => 'abab'
 * repetition('kiwi', 1) => 'kiwi',
 * repetition('cherry', 3) => 'cherrycherrycherry',
 *
 */

/* link to the problem: https://www.udemy.com/course/javascrip-80-coding-challenges/learn/quiz/5539428#questions/17478802*/

/*
 *
 * SOLUTION
 *
 */

const repetition = (txt, times) => {
  if (times < 0) return;
  if (times === 1) return txt;
  else return txt + repetition(txt, times - 1);
}

console.log(repetition('ab', 2));
console.log(repetition('kiwi', 1));
console.log(repetition('cherry', 3));
