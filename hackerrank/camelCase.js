// https://www.hackerrank.com/challenges/camelcase/problem

const input = `saveChangesInTheEditor`;

const camelCaseWordCounter = (string) =>
  string
    .split('')
    .reduce((acc, cv) => (cv === cv.toUpperCase() ? (acc += 1) : acc), 0) + 1;

console.log(camelCaseWordCounter(input));
