'use strict';

var round = require( 'math-round' );
var repeat = require( './../lib' );

var str = 'beep';
var n;
var i;

for ( i = 0; i < 100; i++ ) {
	n = round( Math.random()*3 );
	console.log( repeat( str, n ) );
}
