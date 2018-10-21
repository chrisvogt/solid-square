import chalk from 'chalk';
import test from 'ava';
import solidSquare from '.';

test('it throws an error when supplied a non-numeric size', t => {
  const size = 'meow';
  const err = t.throws(() => {
    solidSquare(size);
  }, TypeError);
  t.is(err.message, `Expected a numerical size greater than 0. Got: ${size}.`);
});

test('it throws an error when supplied a value less than 1', t => {
  const size = '-4';
  const err = t.throws(() => {
    solidSquare(size);
  }, TypeError);
  t.is(err.message, `Expected a numerical size greater than 0. Got: ${size}.`);
});

test('it renders solid blocks by default', t => {
  t.deepEqual(solidSquare(), '██');
});

test('it can be resized', t => {
  const expected = `██████████
██████████
██████████
██████████
██████████`;
  t.deepEqual(solidSquare(5), expected);
});

test('it can render different unicode characters', t => {
  const expected = `★★★
★★★
★★★`;
  t.deepEqual(solidSquare(3, {character: '★'}), expected);
});

test('it can render hex colors', t => {
  const expected = chalk.hex('#ff4600')('██');
  t.deepEqual(solidSquare(1, {color: '#ff4600'}), expected);
});

test('it can render colors from keywords', t => {
  const expected = chalk.keyword('purple')('██');
  t.deepEqual(solidSquare(1, {color: 'purple'}), expected);
});

test('it can be scaled on the y-axis', t => {
  const expected = '★★★★★★★★★★';
  t.deepEqual(solidSquare(10, {character: '★', scale: 0.1}), expected);
});
