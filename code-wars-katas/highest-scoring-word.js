/* 
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 */

const highest = (sentence) => {
  let highest = null;
  let highestPoint = 0;
  for (const word of sentence.split(' ')) {
    let currentPoints = 0;
    for (const letter of word.toUpperCase()) {
      currentPoints += letter.charCodeAt() - 64;
      console.log(letter.charCodeAt() - 64);
    }
  }
};
console.log(highest('man i need a taxi up to ubud'), 'taxi');
console.log(highest('what time are we climbing up the volcano'), 'volcano');
console.log(highest('take me to semynak'), 'semynak');
