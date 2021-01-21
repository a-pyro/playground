'use strict';

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

/*Find Intersection
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false. */

// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
function FindIntersection(strArr) {
    let output = '';
    let firstString = strArr[0].split(', ');
    let secondString = strArr[1].split(', ');
    // code goes here
    for (let element of firstString) {
        if (secondString.includes(element)) {
            output += `${element},`;
        }
        // console.log(element);
    }
    // console.log(output.slice(0, output.length - 1));
    // console.log(typeof output);

    return output === '' ? false : output.slice(0, output.length - 1);
}

// console.log(FindIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']));
// console.log(FindIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']));
// console.log(FindIntersection(['1, 3, 9, 10, 17, 18', '0, 4, 5, 7']));

function repeatedString(s, n) {
    let asInTheS = 0;
    for (let char of s) {
        if (char === 'a') {
            asInTheS++;
        }
    }

    // so quante a cisono nella stringa
    // quante volte ripeto?
    let ripetute = n / s.length;

    console.log(`a in in the string ${s}: `, asInTheS);
    let repetitionBlocks = n / s.length;

    // return n >= s.length
    //   ? Math.ceil((n / s.length) * asInTheS)
    //   : Math.floor((n / s.length) * asInTheS);
}

// console.log(1022 / 5);
// console.log(1022 % 5);

// console.log(repeatedString('a', 10));

// console.log(Math.ceil((10 / 3) * 2));

// console.log(Math.floor((2 / 3) * 2));

function reverseLetter(str) {
    //coding and coding..

    return str.match(/[a-z]/g).reverse().join('');
}
// console.log(reverseLetter('abc3434def'));

function wave(str) {
    const output = [];
    let word = '';
    for (let i = 0; i < str.length; i++) {
        // output.push(`${str.charAt(i).toUpperCase()}${str.slice(i + 1)}`);
        word += str[i].toUpperCase();
        output.push(str.replace(str.charAt(i), str.charAt(i).toUpperCase()));
    }
    return output;
}
// console.log(wave('hello'));

// ["Hello", "hEllo", "heLlo", "helLo", "hellO"];

/* 
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}: Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}: Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index. */

const findEvenIndex = function (arr) {
    let berlinWall;
    let indexBerlin;
    for (let i = 0; i < arr.length; i++) {
        let currentWall = arr[i];
        let indexWall = i;
        let leftSide = indexWall === 0 ? [0] : arr.slice(0, indexWall);
        let rightSide = arr.slice(indexWall + 1);

        let sumLeft = 0;
        let sumRight = 0;
        for (let j = 0; j < leftSide.length; j++) {
            sumLeft += leftSide[j];
        }

        for (let k = 0; k < rightSide.length; k++) {
            sumRight += rightSide[k];
        }

        if (sumLeft === sumRight) {
            berlinWall = currentWall;
            indexBerlin = indexWall;
        }
    }

    if (indexBerlin === undefined) {
        return -1;
    }
    return indexBerlin;
    // return `Wall: ${berlinWall}, IndexWall: ${indexBerlin} `;
};

// console.log(findEvenIndex([1, 2, 4, 4, 3, 2, 1]));
// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
// console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));

/* For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text. */

const encrypt = (text, n) => {
    // if n <= 0 return text
    if (n <= 0) return text;
    // if text is null or empty return null or empty
    switch (text) {
        case null:
            return null;
        case '':
            return '';

        default:
            let textToEncrypt = text;

            for (let k = 0; k < n; k++) {
                const outputArr = [];
                const textLength = text.length;
                for (let i = 0; i < textLength; i++) {
                    const currentChar = textToEncrypt[i];
                    if (i % 2 !== 0) {
                        outputArr.push(currentChar);
                    } else {
                        continue;
                    }
                }
                for (let j = 0; j < textLength; j++) {
                    const currentChar = textToEncrypt[j];
                    if (j % 2 === 0) {
                        outputArr.push(currentChar);
                    } else {
                        continue;
                    }
                }
                textToEncrypt = outputArr.join('');
            }
            return textToEncrypt;
    }
    // split the string into an array
    // every 2nd char will have odd index

    // loop and check if index
    // if so push in the array
    // end of the loop = we have the array filled with 2nd chars
    // new loop to push the chars with even index
    // join the array in a new string
};
const decrypt = (encryptedText, n) => {
    // if n <= 0 return text
    if (n <= 0) return text;
    // if text is null or empty return null or empty
    switch (text) {
        case null:
            return null;
        case '':
            return '';

        default:
            let textToEncrypt = text;

            for (let k = 0; k < n; k++) {
                const outputArr = [];
                const textLength = text.length;
                for (let i = 0; i < textLength; i++) {
                    const currentChar = textToEncrypt[i];
                    if (i % 2 !== 0) {
                        outputArr.push(currentChar);
                    } else {
                        continue;
                    }
                }
                for (let j = 0; j < textLength; j++) {
                    const currentChar = textToEncrypt[j];
                    if (j % 2 === 0) {
                        outputArr.push(currentChar);
                    } else {
                        continue;
                    }
                }
                textToEncrypt = outputArr.join('');
            }
            return textToEncrypt;
    }
};

// console.log(decrypt('This is a test!', -1));
// console.log(decrypt('This is a test!', 0));
// console.log(decrypt('This is a test!', 1));
// console.log(decrypt('This is a test!', 2));
// console.log(decrypt('This is a test!', 3));
// console.log(decrypt('This is a test!', 4));
// console.log(decrypt('This kata is very interesting!', 1));
// console.log(encrypt('null', -1));
// console.log(encrypt('null', -1));
function oddIndexFinder(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (i % 2 !== 0) counter++;
    }
    // console.log(counter);
    const firstPart = str.slice(0, counter);
    const secondPart = str.slice(counter);
    // console.log(`${firstPart}${secondPart}`);
    let output = '';
    let k = 0;
    while (output.length <= str.length) {
        console.log(output, k);
        output += `${secondPart[k]}${firstPart[k]}`;
        k++;
    }
    console.log(output.slice(0, output.length - 1));
}
// oddIndexFinder('hsi  etTi sats!');
//hsi  etTi sats!

/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sum = (a, b) => (a === b ? (a + b) * 3 : a + b);
// console.log(sum(1, 2));
// console.log(sum(2, 2));

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const checkNum = (num1, num2) =>
    num1 === 50 || num2 === 50 || num1 + num2 === 50 ? true : false;

// console.log(checkNum(25, 25));
// console.log(checkNum(50, 25));
// console.log(checkNum(5, 26));

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const eraser = (text, index) => text.replace(text.charAt(index), '');
// console.log(eraser('ciao', 0));
// console.log(eraser('ciao', 1));
// console.log(eraser('ciao', 2));
// console.log(eraser('ciao', 3));

/*
4)
 Create a function to find the largest of three given integers.
*/

const greaterInt = (n1, n2, n3) => {
    switch (true) {
        case n1 > n2 && n1 > n3:
            return n1;
        case n2 > n1 && n2 > n3:
            return n2;
        case n3 > n2 && n3 > n1:
            return n3;

        default:
            return 'number equals';
            break;
    }
};

// console.log(greaterInt(6, 2, 3));
// console.log(greaterInt(6, 12, 3));
// console.log(greaterInt(6, 2, 40));
// console.log(greaterInt(6, 40, 40));

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const ranger = (n1, n2) => {
    return n1 >= 40 && n1 <= 60 && n1 >= 40 && n1 <= 60;
};

/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/
const fotocopiatrice = (text, n) => (n > 0 ? text.repeat(n) : 'invalid number');
// console.log(fotocopiatrice('ciao', 2));
// console.log(fotocopiatrice('ciao', 1));
// console.log(fotocopiatrice('ciao', 0));
/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const city = text =>
    text.toLowerCase().slice(0, 3).includes('los') ||
    text.toLowerCase().slice(0, 3).includes('new')
        ? text
        : 'blank!';
// console.log(city('ciaone'));
// console.log(city('loscianoe'));
// console.log(city('newone'));
// console.log(city('onenew'));
// console.log(city('nelosne'));

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const sumArr = arr => arr.reduce((ac, cv) => ac + cv);
// console.log(sumArr([3, 6, 9]));
/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const checkArr = arr => arr.includes(1) || arr.includes(3);
// console.log(checkArr([0, 5]));
// console.log(checkArr([1, 5]));
// console.log(checkArr([3, 5]));
/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
const checkArr2 = arr => !arr.includes(1) || !arr.includes(3);
// 11)
// Create a function to find the longest string from a given array of strings.

const longestStr = arr => {
    let s = '';
    arr.forEach(str => {
        if (str.length > s.length) {
            s = str;
        }
    });
    return s;
};
// console.log(longestStr(['hi', 'hi', 'ciao', 'hello']));

// 12)
// Create a function to find the types of a given angle.
// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

// 13)
// Create a function to find the index of the greatest element of a given array of integers
const greatestIndex = arr => {
    let numb = 0;
    let i;
    arr.forEach((num, ind) => {
        if (num >= numb) {
            i = ind;
            numb = num;
        }
    });
    return i;
};

// console.log(greatestIndex([10, 23, 2]));
// console.log(greatestIndex([10, 23, 200]));
// console.log(greatestIndex([10000, 23, 200]));

// 14)
// Create a function to get the largest even number from an array of integers.

const evenLargest = arr =>
    arr.filter(value => value % 2 === 0).sort((a, b) => a - b)[
        arr.filter(value => value % 2 === 0).sort((a, b) => a - b).length - 1
    ];
// console.log(evenLargest([103, 3432, 52, 100]));
// console.log(evenLargest([100, 103, 344, 52, 90012]));

// 16)
// Create a function to check from two given integers, whether one is positive and another one is negative.
const posnegInt = (n1, n2) => {
    switch (true) {
        case n1 >= 0 && n2 < 0:
            return true;
        case n2 >= 0 && n1 < 0:
            return true;

        default:
            return false;
    }
};

// console.log(posnegInt(1, -1));
// console.log(posnegInt(-2, 2));
// console.log(posnegInt(1, 1));
// console.log(posnegInt(-2, -2));

// 17)
// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.
const stringer = string =>
    string.length <= 3
        ? string.toUpperCase()
        : `${string.slice(0, 3).toLowerCase()}${string.slice(3).toUpperCase()}`;

// console.log(stringer('hii'));
// console.log(stringer('hiiFYHRjdsovioi'));
// 18)
// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
const sumRange = (n1, n2) => (n1 + n2 >= 50 && n1 + n2 <= 80 ? 65 : 80);

// console.log(sumRange(50, 30));
// console.log(sumRange(40, 80));

// 19)
// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".
// const egoStrivers = (num) => {
//     let answer = '';
//     switch (true) {
//         case num % 3 === 0:
//             answer += 'Diego';
//         case num % 5 === 0:
//             answer += 'Riccardo';
//         case num % 7 === 0:
//             answer += 'Stefano';
//         default:
//             break;
//     }
//     return answer;
// };
// console.log(egoStrivers(28));
// console.log(egoStrivers(30));

// 20)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
const acronymr = string =>
    string.split(' ').reduce((ac, cv) => ac + cv.charAt(0), '');

// console.log(acronymr('British Broadcasting Corporation'));
// console.log(acronymr('British Cazzoni Corporation'));
// console.log(acronymr('America Broadcasting Corporation Defe eee'));

/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with roundolute error of up to  are acceptable.*/

function plusMinus(arr) {
    const arrLen = arr.length;
    const positives = arr.filter(el => el > 0).length;
    const negatives = arr.filter(el => el < 0).length;
    const zeros = arr.filter(el => el === 0).length;
    console.log((positives / arrLen).toFixed(6));
    console.log((negatives / arrLen).toFixed(6));
    console.log((zeros / arrLen).toFixed(6));
}

// plusMinus([-4, 3, -9, 0, 4, 1]);

/* Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

 */

function staircase(n) {
    let char;
    let space;
    for (let i = 1; i <= n; i++) {
        char = '#'.repeat(i);
        space = ' '.repeat(n - i);
        console.log(space + char);
        // console.log(' '.repeat(n - i) + '#'.repeat(n - (n - i)));
    }
}

// staircase(5);

/**Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers. */

function miniMaxSum(arr) {
    const sorted = arr.sort((a, b) => a - b);
    console.log(sorted);
    console.log(
        sorted.slice(0, arr.length - 1).reduce((ac, cv) => ac + cv),
        sorted.slice(1).reduce((ac, cv) => ac + cv)
    );
}

// miniMaxSum([9, 8, 3, 77, 34, 52]);

/**You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest. */

function birthdayCakeCandles(candles) {
    return candles
        .sort((a, b) => a - b)
        .filter((el, ind, arr) => el === arr[arr.length - 1]).length;
}

// console.log(birthdayCakeCandles([3, 2, 2, 3]));
// console.log(birthdayCakeCandles([3, 2, 6, 3]));
// console.log(birthdayCakeCandles([9, 9, 9, 3]));

/**Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

 */

function timeConversion(s) {
    const last2 = s.slice(s.length - 2);
    let first2 = s.slice(0, 2);
    const middle = s.slice(2, s.length - 2);

    switch (last2) {
        case 'PM':
            switch (true) {
                case parseInt(first2) < 12:
                    first2 = String(parseInt(first2) + 12);
                    return first2 + middle;

                default:
                    return first2 + middle;
            }

        default:
            parseInt(first2) === 12 ? (first2 = '00') : '';
            return first2 + middle;
    }
}
/* 
    console.log(timeConversion('12:05:45PM'));
    console.log(timeConversion('11:59:45PM'));
    console.log(timeConversion('12:05:45AM'));
    console.log(timeConversion('01:05:45AM'));

 */

/* HackerLand University has the following grading policy:

Every student receives a  in the inclusive range from  to .
Any  less than  is a failing grade.
Sam is a professor at the university and likes to round each student's  according to these rules:

If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
If the value of  is less than , no rounding occurs as the result will still be a failing grade. */

function gradingStudents(grades) {
    const result = [];
    for (const grade of grades) {
        switch (true) {
            case grade < 38 || grade === 100:
                result.push(grade);
                break;
            case grade % 5 === 3:
                result.push(grade + 2);

                break;
            case grade % 5 === 4:
                result.push(grade + 1);

                break;

            default:
                result.push(grade);

                break;
        }
    }
}

// gradingStudents([70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80]);
// console.log(gradingStudents([73, 67, 38, 33]));

/* Apples & oranges
Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

In the diagram below:

The red region denotes the house, where  is the start point, and  is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
Assume the trees are located on a single point, where the apple tree is at point , and the orange tree is at point .
When a fruit falls from its tree, it lands  units of distance from its tree of origin along the -axis. *A negative value of  means the fruit fell  units to the tree's left, and a positive value of  means it falls  units to the tree's right. *
Apple and orange(2).png

Given the value of  for  apples and  oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range )?
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let [app, or] = [0, 0];

    apples.forEach(d => {
        if (a + d >= s && a + d <= t) app++;
    });

    oranges.forEach(d => {
        if (b + d >= s && b + d <= t) or++;
    });
    console.log(app);
    console.log(or);
    /* 
    console.log(apples.filter((d) => d + a >= a && d + a <= t).length);
    console.log(oranges.filter((d) => d + b >= a && d + b <= t).length); */
}

/* 
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing" */

const solution = string => {
    /* let out = '';
    for (const letter of string) {
        if (letter.toUpperCase() === letter) {
            out += ` ${letter}`;
            continue;
        }
        out += letter;
    }
    return out; */

    return string
        .split('')
        .map(el => {
            return el.toUpperCase() === el ? ` ${el}` : el;
        })
        .join('');
};

// console.log(solution('amelCasingCasaSucacazzAmore'));

/* 
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

const firstNonRep = str => {
    for (const letter of str) {
        let counter = 0;
        for (const checkLetter of str) {
            if (letter.toLowerCase() === checkLetter.toLowerCase()) counter++;
        }
        if (counter === 1) return letter;
    }
    return ' ';
};

/* 
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
 */

function scramble(str1, str2) {
    const arr1 = [...str1];
    const arr2 = [...str2];
    /*     const fil = arr2.filter((e) => !arr1.includes(e));
    console.log(fil);
    return fil.length !== 0 ? false : true; */
    // devo cercare se una stringa è contentuta nell'altra
    // se ogni lettera di una stringa è contenuta nell'altra
    arr1.forEach(el => {
        arr2.includes(el)
            ? arr2.splice(arr2.indexOf(el), 1)
            : console.log('el not inluded or already removed');

        // console.log(el);
        // console.log(arr2);
    });
    // console.log(arr1);
    // console.log(arr2);
    return arr2.length === 0;
}

// scramble('rkqodlw', 'world');
// scramble('katazs', 'steak');

/* 
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. 

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function anagrams(word, words) {
    const letters = [...word];
    const anagrams = words.filter(word => {
        const toCheck = [...word];
        letters.forEach(letter => {
            if (toCheck.includes(letter)) {
                toCheck.splice(toCheck.indexOf(letter), 1);
            }
        });
        if (toCheck.length === 0) return true;
    });

    console.log(anagrams);
    return anagrams;
}

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);

// anagrams('laser', ['lazing', 'lazy', 'lacer']);

/* 
solution from other users
let anagrams = (word, words) => words.filter(w => w.split('').sort().join('') === word.split('').sort().join(''));
*/

/* -------------------------
valid parentheses
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100


*/

function validParentheses(parens) {
    console.log(parens);
    const pare = '()';
    let result = false;
    let temp = parens.slice(0);
    switch (true) {
        case parens.length === 1:
            console.log(parens, result);

            return result;
        case parens[0] === ')':
            console.log(parens, result);

            return result;
        case parens[parens.length - 1] === '(':
            console.log(parens, result);

            console.log(parens, result);

            return result;
        default:
            for (let i = 0; i < parens.length / 2; i++) {
                temp = temp.replace(pare, '');
                if (temp.length === 0) {
                    result = true;
                    console.log(parens, result);
                    return result;
                }
            }

            console.log(parens, result);

            return parens === '' ? true : result;
    }
}

// validParentheses('()');
// validParentheses(')(()))');
// validParentheses('(');
// validParentheses('(())((()())())');

/* 
Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

Example
  deleteNth ([1,1,1,1],2) // return [1,1]

  deleteNth ([20,37,20,21],1) // return [20,37,21]
*/

function deleteNth(arr, n) {
    // console.log(arr, n);
    const cleaned = [];
    const countNumberInCleaned = (arr, n) => {
        let counter = 0;
        arr.forEach(el => {
            if (n === el) {
                counter++;
            }
        });
        // console.log(counter);
        return counter;
    };

    for (const number of arr) {
        console.log('number', number);
        console.log('count of number', countNumberInCleaned(cleaned, number));
        if (countNumberInCleaned(cleaned, number) < n) {
            cleaned.push(number);
            console.log(cleaned);
        }
    }
    console.log(cleaned);
    return cleaned;
}

// deleteNth([20, 37, 20, 21], 1); //[20,37,21])
// deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3); // [1, 1, 3, 3, 7, 2, 2, 2]

/* 
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out. */
const stripComments = (input, marker) => {
    console.log(input);
    const splitted = input.split('\n');
    console.log(splitted);
    let result = [];
    const regexp = new RegExp(
        marker.reduce((acc, next) => acc + `${next}`, '[') + ']'
    );

    console.log('regex', regexp);
    for (const line of splitted) {
        console.log(line);
        let mark = null;

        marker.forEach(el => {
            if ([...line].includes(el)) {
                mark = el;
            }
        });
        console.log(mark);

        mark === null
            ? result.push(line.trim())
            : result.push(line.slice(0, line.indexOf(mark)).trim());
    }
    console.log(result.join('\n'));
    return result.join('\n');
};

/* stripComments('apples, pears # and bananas\ngrapes\nbananas !apples', [
    '#',
    '!',
]);
 */

function sumIntervals(intervals) {
    //metto in ordine
    const sorted = intervals.sort((a, b) => a[1] - b[1]);
    // console.table(sorted);

    //accoprare intervalli

    // se l'inizio del prossimo intervallo è <= all'inizio dell'intervallo corrente allora accorpo i due intervali (int start current int end del next)

    const accorpati = [];
    let i = 0;

    /*   while (true) {
        const [currentStart, currentEnd] = sorted[i];
        const [nextStart, nextEnd] =
            sorted[i + 1] === undefined ? [null, null] : sorted[i + 1];

        console.log('curr', currentStart, currentEnd);
        console.log('next', nextStart, nextEnd);
        if (nextStart) {
            //se non sono all'ultimo elemento
            //se overlappano
            if (nextStart <= currentEnd) {
                //li unico e spingo
                accorpati.push([currentStart, nextEnd]);
                //se li ho accorpati devo trovare un modo per evitare che alla prossima iterazione il current diventi il next di questo giro, perchè l'ho già usato
                console.log('curr BEFORE SPLICE', currentStart, currentEnd, i);
                console.log('next BEFORE SPLICE', nextStart, nextEnd, i);
                console.log(
                    sorted.splice(sorted.indexOf([nextStart, nextEnd]), 1),
                    1
                );
                i++;
            } else {
                //non overlappano, spingo il corrente
                accorpati.push(currentStart, currentEnd);
                i++;
            }
        } else {
            // sono all'ultimo elemento
            //spingo l'ultimo ed esco
            accorpati.push([currentStart, currentEnd]);

            break;
        }
    } */

    //parto dal primo
    //faccio un giro su tutti gli intervall
    // [st, end] se next[start] <= curr[End] lo accorpo
    // se lo accorpo elimino il next, e vado a quello successivo accorpando tutti gli accorpabili ed eliminandoli ma mano che li trovo. aggiungo cio' che rimane

    // console.table(accorpati);

    //senza overlap
    const answer = sorted.reduce((acc, cv) => {
        return acc + (cv[1] - cv[0]);
    }, 0);
    // console.log(answer);
}
/* sumIntervals([
    [1, 2],
    [6, 10],
    [11, 15],
]); // => 9 */

sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
]); // => 7

/* sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
]); // => 19 */

/* 
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */
function arrayDiff(a, b) {
    return a.filter(el => !b.includes(el));
}

/* 
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

function zero() {
    const myVal = 0;
    //se non ha args ritorna il valore
    if (Array.from(arguments).length === 0) {
        // console.log('non ho argomenti e ritorno il mio valore:', myVal);
        return myVal;
    } else {
        //ha args quindi li usa
        const result = Math.floor(eval(`${myVal}${Array.from(arguments)[0]}`));
        console.log(result);
        return result;

        // console.log(Array.from(arguments)[0]);
    }
}

function one() {
    const myVal = 1;
    //se non ha args ritorna il valore
    if (Array.from(arguments).length === 0) {
        // console.log('non ho argomenti e ritorno il mio valore:', myVal);
        return myVal;
    } else {
        //ha args quindi li usa
        const result = Math.floor(eval(`${myVal}${Array.from(arguments)[0]}`));
        console.log(result);
        return result;

        // console.log(Array.from(arguments)[0]);
    }
}

function two() {
    const myVal = 2;
    //se non ha args ritorna il valore
    if (Array.from(arguments).length === 0) {
        // console.log('non ho argomenti e ritorno il mio valore:', myVal);
        return myVal;
    } else {
        //ha args quindi li usa
        const result = Math.floor(eval(`${myVal}${Array.from(arguments)[0]}`));
        console.log(result);
        return result;

        // console.log(Array.from(arguments)[0]);
    }
}

function three() {
    const myVal = 3;
    //se non ha args ritorna il valore
    if (Array.from(arguments).length === 0) {
        // console.log('non ho argomenti e ritorno il mio valore:', myVal);
        return myVal;
    } else {
        //ha args quindi li usa
        const result = Math.floor(eval(`${myVal}${Array.from(arguments)[0]}`));
        console.log(result);
        return result;

        // console.log(Array.from(arguments)[0]);
    }
}

function four() {
    const myVal = 4;
    //se non ha args ritorna il valore
    if (Array.from(arguments).length === 0) {
        // console.log('non ho argomenti e ritorno il mio valore:', myVal);
        return myVal;
    } else {
        //ha args quindi li usa
        const result = Math.floor(eval(`${myVal}${Array.from(arguments)[0]}`));
        console.log(result);
        return result;

        // console.log(Array.from(arguments)[0]);
    }
}

function six() {
    const myVal = 6;
    //se non ha args ritorna il valore
    if (Array.from(arguments).length === 0) {
        // console.log('non ho argomenti e ritorno il mio valore:', myVal);
        return myVal;
    } else {
        //ha args quindi li usa
        const result = Math.floor(eval(`${myVal}${Array.from(arguments)[0]}`));
        console.log(result);
        return result;

        // console.log(Array.from(arguments)[0]);
    }
}

function eight() {
    const myVal = 8;
    //se non ha args ritorna il valore
    if (Array.from(arguments).length === 0) {
        // console.log('non ho argomenti e ritorno il mio valore:', myVal);
        return myVal;
    } else {
        //ha args quindi li usa
        const result = Math.floor(eval(`${myVal}${Array.from(arguments)[0]}`));
        console.log(result);
        return result;

        // console.log(Array.from(arguments)[0]);
    }
}

function nine() {
    const myVal = 9;
    //se non ha args ritorna il valore
    if (Array.from(arguments).length === 0) {
        // console.log('non ho argomenti e ritorno il mio valore:', myVal);
        return myVal;
    } else {
        //ha args quindi li usa
        const result = Math.floor(eval(`${myVal}${Array.from(arguments)[0]}`));
        console.log(result);
        return result;

        // console.log(Array.from(arguments)[0]);
    }
}

function seven() {
    const myVal = 7;
    //se non ha args ritorna il valore
    if (Array.from(arguments).length === 0) {
        // console.log('non ho argomenti e ritorno il mio valore:', myVal);
        return myVal;
    } else {
        //ha args quindi li usa
        const result = Math.floor(eval(`${myVal}${Array.from(arguments)[0]}`));
        console.log(result);
        return result;

        // console.log(Array.from(arguments)[0]);
    }
}

function five() {
    const myVal = 5;
    //se non ha args ritorna il valore
    if (Array.from(arguments).length === 0) {
        // console.log('non ho argomenti e ritorno il mio valore:', myVal);
        return myVal;
    } else {
        //ha args quindi li usa
        const result = Math.floor(eval(`${myVal}${Array.from(arguments)[0]}`));
        console.log(result);
        return result;
        // console.log(Array.from(arguments)[0]);
    }
}

function plus(num) {
    return `+${num}`;
}
function minus(num) {
    return `-${num}`;
}
function times(num) {
    return `*${num}`;
}

function dividedBy(num) {
    return `/${num}`;
}

// seven(times(five())); // 35
// four(plus(nine())); // 13
// eight(minus(three())); // 5
// six(dividedBy(two())); // 3

/* unique in order 
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

const uniqueInOrder = function (iterable) {
    if (Array.isArray(iterable)) {
        const result = iterable.reduce((acc, cv) => {
            if (acc[acc.length - 1] !== cv) acc.push(cv);
            return acc;
        }, []);
        console.log(result);
        return result;
    } else {
        const arr = iterable.split('');
        const result = arr.reduce((acc, cv) => {
            if (acc[acc.length - 1] !== cv) acc.push(cv);
            return acc;
        }, []);
        console.log(result);
        return result;
    }
};

// uniqueInOrder('AAAABBBCCDAABBB'); // ['A', 'B', 'C', 'D', 'A', 'B']
