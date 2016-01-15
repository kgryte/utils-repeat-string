'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' );
var isNonNegativeInteger = require( 'validate.io-nonnegative-integer' );


// NOTES //

/**
* The algorithmic trick used in the implementation is to treat string concatenation the same as binary addition (i.e., any natural number (nonnegative integer) can be expressed as a sum of powers of two).
*
* For example,
*
*  n = 10 => 1010 => 2^3 + 2^0 + 2^1 + 2^0
*
* We can produce a 10-repeat string by "adding" the results of a 8-repeat string and a 2-repeat string.
*
* The implementation is then as follows:
*  : Let `s` be the string to be repeated and `o` be an output string.
*  0) Initialize an output string `o`.
*  1) Check the least significant bit to determine if the current `s` string should be "added" to the output "total".
*     - if the bit is a one, add
*     - otherwise, move on
*  2) Double the string `s` by adding `s` to `s`.
*  3) Right-shift the bits of `n`.
*  4) Check if we have shifted off all bits.
*     - if yes, done.
*     - otherwise, move on
*  5) Repeat 1-4.
*
* The result is that, as the string is repeated, we continually check to see if the doubled string is one which we want to add to our "total".
*
* The algorithm runs in O(log_2(n)) compared to O(n).
*/


// CONSTANTS //

var MAX_SAFE_INTEGER = 9007199254740991; // 2**53 - 1


// REPEAT //

/**
* FUNCTION: repeat( str, n )
*	Repeats a string a specified number of times and returns the concatenated result.
*
* @param {String} str - string to repeat
* @param {Number} n - number of times to repeat the string
* @returns {String}
*/
function repeat( str, n ) {
	var rpt;
	var cnt;
	if ( !isString( str ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string. Value: `' + str + '`.' );
	}
	if ( !isNonNegativeInteger( n ) ) {
		throw new TypeError( 'invalid input argument. Second argument must be a nonnegative integer. Value: `' + n + '`.' );
	}
	if ( str.length === 0 || n === 0 ) {
		return '';
	}
	// Check that output string will not exceed the maximum string length:
	if ( str.length * n > MAX_SAFE_INTEGER ) {
		throw new RangeError( 'invalid input argument. Output string length exceeds maximum allowed string length.' );
	}
	rpt = '';
	cnt = n;
	for( ; ; ) {
		// If the count is odd, append the current concatenated string:
		if ( (cnt&1) === 1 ) {
			rpt += str;
		}
		// Right-shift the bits:
		cnt >>>= 1;
		if ( cnt === 0 ) {
			break;
		}
		// Double the string:
		str += str;
	}
	return rpt;
} // end FUNCTION repeat()


// EXPORTS //

module.exports = repeat;
