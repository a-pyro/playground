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
    charArr.forEach(element => {
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
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1)
    }
    return array.join(' ')

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
    return words === '' ? '' : orderedWords.join(' ').trim()





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

console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));