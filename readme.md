# solid-square [![Build Status](https://travis-ci.org/chrisvogt/solid-square.svg?branch=master)](https://travis-ci.org/chrisvogt/solid-square) [![codecov](https://codecov.io/gh/chrisvogt/solid-square/badge.svg?branch=master)](https://codecov.io/gh/chrisvogt/solid-square?branch=master)

> Render solid squares of varying sizes and colors


## Install

```
$ npm install solid-square
```


## Usage

```js
const solidSquare = require('solid-square');

console.log(solidSquare(10));
// ████████████████████
// ████████████████████
// ████████████████████
// ████████████████████
// ████████████████████
// ████████████████████
// ████████████████████
// ████████████████████
// ████████████████████
// ████████████████████
```

```js
const solidSquare = require('solid-square');

console.log(
  solidSquare(10, {
    character: '☺',
    color: 'yellow',
    scale: .5
  });
);
// ☺☺☺☺☺☺☺☺☺☺
// ☺☺☺☺☺☺☺☺☺☺
// ☺☺☺☺☺☺☺☺☺☺
// ☺☺☺☺☺☺☺☺☺☺
// ☺☺☺☺☺☺☺☺☺☺
```


## API

### solidSquare(size, [options])

#### size

Type: `number`

The size of your square.

#### options

Type: `Object`

##### character

Type: `string`<br>
Default: `██`

The character to use for each cell.

##### color

Type: `string`<br>
Default: `undefined`

The character to use for each cell.

##### scale

Type: `string`<br>
Default: `undefined`

Y-axis size multiplier.


## License

MIT © [Chris Vogt](https://chrisvogt.me)
