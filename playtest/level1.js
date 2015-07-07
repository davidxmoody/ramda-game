/*
 * Rules of the game:
 * 1. You are only allowed to modify the indicated lines of code
 * 2. You are only allowed to use the R object and any local variables
 * 3. You are NOT allowed to use custom constants (e.g. `1` or `[6, 8, 10]`)
 * 4. You are NOT allowed to use custom functions (e.g. `function(num) {return num*2;}`)
 * 5. You are NOT allowed to define new variables except the ones already given
 *    to you (e.g. `var a = 2;` or `b = R.map`)
 * 
 * Your goal is to make all the assertions pass and reach the final statement.
 *
 * Good luck!
 *
 * This is a very early version of the game designed to get some early
 * feedback, please let me know what you think at david@davidxmoody.com
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

var num = null;

var list = null;

// END OF CHANGES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Assertions
assert.deepEqual(list, [6, 8, 10]);

console.log('Congratulations, all assertions passed!');
