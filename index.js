'use strict';

const chalk = require('chalk');
const isHex = require('is-hex');

const BLOCK = '██';

const stripHash = color => color.replace(/^#/, '');

module.exports = (size = 1, options = {}) => {
  if (typeof size !== 'number' || size <= 0) {
    throw new TypeError(`Expected a numerical size greater than 0. Got: ${size}.`);
  }

  const {
    character: optChar = BLOCK,
    color: optColor,
    scale: optScale = 1
  } = options;

  const scale = size * optScale;
  const color = optColor && stripHash(optColor);
  const char = optColor ?
    isHex(color) ?
      chalk.hex(color)(optChar) :
      chalk.keyword(optColor)(optChar) :
    optChar;

  return new Array(scale)
    .fill(char.repeat(size))
    .join('\n');
};

