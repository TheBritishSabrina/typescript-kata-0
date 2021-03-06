import { isPrime, gap } from "./primeGap";

test("tests whether a number is prime", () => {
  expect(isPrime(10)).toBe(false);
  expect(isPrime(7)).toBe(true);
  expect(isPrime(7549)).toBe(true);
});

test("calculates first two primes between m & n with given gap g", () => {
  expect(gap(8, 1, 29)).toBe(null);
  expect(gap(1, 1, 10)).toStrictEqual([1, 2]);
  expect(gap(5, 2, 20)).toStrictEqual([2, 7]);
  expect(gap(4, 3, 12)).toStrictEqual([7, 11]);
  expect(gap(4, 100, 110)).toStrictEqual([103, 107]);
  expect(gap(2, 100, 110)).toStrictEqual([101, 103]);
  expect(gap(4, 100, 110)).toStrictEqual([103, 107]);
  expect(gap(7, 100, 110)).toBe(null);
  expect(gap(8, 300, 400)).toStrictEqual([359, 367]);
});
