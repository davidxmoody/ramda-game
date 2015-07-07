/*
 * The solution is at the end of this file, scroll down if you are sure you
 * want to see it.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

var R = require('ramda');
var assert = require('assert');

// Allowed functions
R = {
  drop: R.drop,
  head: R.head,
  map: R.map,
  multiply: R.multiply,
  nth: R.nth,
  reverse: R.reverse
};

// Inputs
var input = [1, 2, 3, 4, 5];


// MAKE CHANGES TO THE NEXT TWO LINES OF CODE ONLY! ~~~~~~~~~~~~~~~~~~~~~~~~~~~

var num = R.nth(R.head(input), input);

var list = R.drop(num, R.map(R.multiply(num), input));

// END OF CHANGES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Assertions
assert.deepEqual(list, [6, 8, 10]);

console.log('Congratulations, all assertions passed!');
