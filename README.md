Repeat
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Repeat a string a specified number of times and return the concatenated result.


## Installation

``` bash
$ npm install utils-repeat-string
```


## Usage

``` javascript
var repeat = require( 'utils-repeat-string' );
```

#### repeat( str, n )

Repeats a string `n` times and returns the concatenated result.

``` javascript
var str = repeat( 'a', 5 );
// returns 'aaaaa'

str = repeat( '', 100 );
// returns ''

str = repeat( 'beep', 0 );
// returns ''
```


## Examples

``` javascript
var round = require( 'math-round' );
var repeat = require( 'utils-repeat-string' );

var str = 'beep';
var n;
var i;

for ( i = 0; i < 100; i++ ) {
	n = round( Math.random()*3 );
	console.log( repeat( str, n ) );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## CLI

### Installation

To use the module as a general utility, install the module globally

``` bash
$ npm install -g utils-repeat-string
```


### Usage

``` bash
Usage: repstr [options] str --n repeats

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --n repeats           Number of repetitions.
```


### Examples

``` bash
$ repstr beep -n 5
# => beepbeepbeepbeepbeep
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/utils-repeat-string.svg
[npm-url]: https://npmjs.org/package/utils-repeat-string

[build-image]: http://img.shields.io/travis/kgryte/utils-repeat-string/master.svg
[build-url]: https://travis-ci.org/kgryte/utils-repeat-string

[coverage-image]: https://img.shields.io/codecov/c/github/kgryte/utils-repeat-string/master.svg
[coverage-url]: https://codecov.io/github/kgryte/utils-repeat-string?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/utils-repeat-string.svg
[dependencies-url]: https://david-dm.org/kgryte/utils-repeat-string

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/utils-repeat-string.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/utils-repeat-string

[github-issues-image]: http://img.shields.io/github/issues/kgryte/utils-repeat-string.svg
[github-issues-url]: https://github.com/kgryte/utils-repeat-string/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com
