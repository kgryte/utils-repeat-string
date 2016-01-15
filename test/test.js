'use strict';

// MODULES //

var test = require( 'tape' );
var repeat = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof repeat === 'function', 'main export is a function' );
	t.end();
});

test( 'if the first argument is not a string primitive, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		5,
		true,
		NaN,
		null,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			repeat( value, 10 );
		};
	}
});

test( 'if the second argument is not a nonnegative integer, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		Math.PI,
		-5,
		true,
		NaN,
		null,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			repeat( 'beep', value );
		};
	}
});

test( 'if the output string will exceed the maximum allowed string length, the function will throw an error', function test( t ) {
	t.throws( foo, RangeError, 'throws RangeError' );
	t.end();
	function foo() {
		repeat( 'beep', 1e300 );
	}
});

test( 'the function repeats an input string a specified number of times', function test( t ) {
	var str;

	str = repeat( 'a', 5 );
	t.equal( str, 'aaaaa', 'repeated 5 times' );

	str = repeat( 'beep', 2 );
	t.equal( str, 'beepbeep', 'repeated 2 times' );

	t.end();
});

test( 'if provided an empty string, the function returns an empty string', function test( t ) {
	t.equal( repeat( '', 100 ), '', 'returns an empty string' );
	t.end();
});

test( 'if repeat number is 0, the function returns an empty string', function test( t ) {
	t.equal( repeat( 'a', 0 ), '', 'returns empty string' );
	t.end();
});
