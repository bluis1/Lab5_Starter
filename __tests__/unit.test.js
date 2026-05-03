// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid phone number with area code', () => {
  expect(isPhoneNumber('858-555-1234')).toBe(true);
});

test('valid phone number without area code', () => {
  expect(isPhoneNumber('555-1234')).toBe(true);
});

test('invalid phone number missing dash', () => {
  expect(isPhoneNumber('8585551234')).toBe(false);
});

test('invalid phone number has letters', () => {
  expect(isPhoneNumber('abc-defg')).toBe(false);
});

test('valid email', () => {
  expect(isEmail('student@test.com')).toBe(true);
});

test('valid email with school domain', () => {
  expect(isEmail('ben@school.edu')).toBe(true);
});

test('invalid email missing at symbol', () => {
  expect(isEmail('studenttest.com')).toBe(false);
});

test('invalid email missing ending', () => {
  expect(isEmail('student@test')).toBe(false);
});

test('valid strong password', () => {
  expect(isStrongPassword('abc123')).toBe(true);
});

test('valid strong password with underscore', () => {
  expect(isStrongPassword('a_12345')).toBe(true);
});

test('invalid password starts with number', () => {
  expect(isStrongPassword('1abcde')).toBe(false);
});

test('invalid password too short', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

test('valid date with two digits', () => {
  expect(isDate('12/25/2026')).toBe(true);
});

test('valid date with one digit', () => {
  expect(isDate('1/5/2026')).toBe(true);
});

test('invalid date uses dashes', () => {
  expect(isDate('12-25-2026')).toBe(false);
});

test('invalid date missing year digits', () => {
  expect(isDate('12/25/26')).toBe(false);
});

test('valid hex color with hashtag', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('valid hex color with six characters', () => {
  expect(isHexColor('#123abc')).toBe(true);
});

test('invalid hex color has bad letter', () => {
  expect(isHexColor('#ggg')).toBe(false);
});

test('invalid hex color too short', () => {
  expect(isHexColor('#12')).toBe(false);
});
