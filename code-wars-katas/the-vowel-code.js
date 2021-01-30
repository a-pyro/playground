/* Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels. */

// creo una stringa vuota come container
// creo array di vocali
// luppo la stringa
// ogni giro guardo se la lettera è una vocale
// se non è una vocale la attacco tale e quale
// se è una vocale (switcho) le sostituisco il valore

function encode(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return string
    .split('')
    .reduce(
      (sentence, letter) =>
        vowels.findIndex((vowel) => vowel === letter) !== -1
          ? sentence + String(vowels.findIndex((vowel) => vowel === letter) + 1)
          : sentence + letter,
      ''
    );
}

function decode(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return string
    .split('')
    .reduce(
      (sentence, letter) =>
        !isNaN(parseInt(letter))
          ? sentence + vowels[parseInt(letter) - 1]
          : sentence + letter,
      ''
    );
}

console.log(encode('hello'), 'h2ll4');
console.log(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
console.log(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
console.log(decode('h2ll4'), 'hello');
