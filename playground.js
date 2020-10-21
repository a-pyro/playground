/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/

function disemvowel(str) {
  let charArr = str.split('');

  let arrNotVowel = [];
  charArr.forEach((element) => {
    if (!'aeiou'.includes(element.toLowerCase())) {
      arrNotVowel.push(element);
    }
  });
  return arrNotVowel.join('');
}

// console.log(disemvowel("This website is for losers LOL!"));

/* Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.*/

function toJadenCase(str) {
  let array = str.split(' ');
  for (i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  return array.join(' ');
}

// console.log(toJadenCase(`How can mirrors be real if our eyes aren't real`));

/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers. 
*/

function order(words) {
  // separate the string into an array to iterate
  let splittedWords = words.split(' ');
  // second array where i'll push the words in the right order
  let orderedWords = [];
  //  how to get the number out of the string? by checking if isNaN('3')=> false
  // 2 for of loops
  // one through each array elment

  // iterating each word
  for (let word of splittedWords) {
    // iterating through the strings
    for (let char of word) {
      // if the character is a letter
      if (isNaN(char)) {
        // move to next iteration
        continue;
      } else {
        // is a number
        orderedWords[char] = word; //assign it to the arrray
      }
    }
  }
  return words === '' ? '' : orderedWords.join(' ').trim();
}

// console.log(order("is2 Thi1s T4est 3a"));

// console.log(isNaN('g'));

// for (let char of 'hello') {
//     console.log(char);
// }

/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times. */

function findOdd(numbers) {
  // increase the counter at each match
  // if the counter is odd i should have found the number
  // i need modulo check on counter
  // counter should be emptied at each iteration // need to check if % !==0 and return to break the loop

  // take the first item and check its equality against each other element
  for (let fixed of numbers) {
    let counter = 0;
    for (let element of numbers) {
      if (fixed === element) {
        counter = counter + 1;
      }
    }

    if (counter % 2 !== 0) {
      return fixed;
    }
  }
}

// console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));

/* You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
*/

function likes(names) {
  let length = names.length;
  let string;

  switch (true) {
    case length === 0:
      return 'no one likes this';
    case length === 1:
      return `${names[0]} likes this`;
    case length === 2:
      return `${names[0]} and ${names[1]} like this`;
    case length === 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

/*
console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Max', 'John', 'Mark', 'morty']));
console.log(likes(['Max', 'John', 'Mark', 'luca', 'jackson']));
*/

// Count the number of divisors of a positive integer n.

// loop while testing n%2 === 0
// when true update counter add counter
function getDivisorsCnt(n) {
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      counter++;
    }
  }
  return counter;
}

// console.log(getDivisorsCnt(4));
// console.log(getDivisorsCnt(50000));
// console.log(getDivisorsCnt(12));
// console.log(getDivisorsCnt(5));
// console.log(getDivisorsCnt(30));

/* Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock
Input Format

The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers describing the colors  of the socks in the pile.

Constraints

 where 
Output Format

Return the total number of matching pairs of socks that Alex can sell.

Sample Input

9
10 20 20 10 10 30 50 10 20
Sample Output

3 
*/

function sockMerchant(n, ar) {
  let pairSocks = 0;
  let counter = 0;
  let counted = [];
  for (let i = 0; i < n; i++) {
    //   assegno valore di controllo
    let currentNumber = ar[i];
    if (counted.includes(currentNumber)) {
      // se ho già coontrollato quel valore passo a quello successivo
      continue;
    } else {
      // se non già controllato quel valore luppo tutto l'array per contare quanti elementi ci sono
      for (let j = i; j < n; j++) {
        if (ar[j] === currentNumber) {
          counter++;
        }
      }
      console.log(`counter of ${currentNumber}:`, counter);

      if (counter > 1) {
        pairSocks += Math.floor(counter / 2);
      }
      counter = 0;
      //   pusho il valore nellìarray di controllo
      counted.push(currentNumber);
    }
  }

  return pairSocks;
}

//   console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

// let arr = [];
// for (let i = 0; i < 8; i++) {
//   arr.push(Math.floor(Math.random() * 9));
// }
// console.log(arr);
// arr.sort(function (a, b) {
//   return a - b;
// });

// console.log(arr);
// console.log(arr.indexOf(arr[arr.length - 1]));
