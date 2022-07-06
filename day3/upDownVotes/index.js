/* Upvotes vs Downvotes */

/*
 *  Given an object containing counts of both upvotes and downvotes,
 *  return what vote count should be displayed. This is calculated by subtracting
 *  the number of downvotes from upvotes.
 */

/* eg:
 * getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
 * getVoteCount({ upvotes: 2, downvotes: 33 }) -> -31
 */

/* link to the problem: https://www.udemy.com/course/javascrip-80-coding-challenges/learn/quiz/5538626#questions

/*
 *
 * SOLUTION
 *
 */

const getVoteCount = (votes) =>  votes.upvotes - votes.downvotes;

console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));