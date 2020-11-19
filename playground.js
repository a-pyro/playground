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
const city = (text) =>
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
const sumArr = (arr) => arr.reduce((ac, cv) => ac + cv);
// console.log(sumArr([3, 6, 9]));
/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const checkArr = (arr) => arr.includes(1) || arr.includes(3);
// console.log(checkArr([0, 5]));
// console.log(checkArr([1, 5]));
// console.log(checkArr([3, 5]));
/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
const checkArr2 = (arr) => !arr.includes(1) || !arr.includes(3);
// 11)
// Create a function to find the longest string from a given array of strings.

const longestStr = (arr) => {
    let s = '';
    arr.forEach((str) => {
        if (str.length > s.length) {
            s = str;
        }
    });
    return s;
};
console.log(longestStr(['hi', 'hi', 'ciao', 'hello']));

// 12)
// Create a function to find the types of a given angle.
// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

// 13)
// Create a function to find the index of the greatest element of a given array of integers
const greatestIndex = (arr) => {
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

const evenLargest = (arr) =>
    arr.filter((value) => value % 2 === 0).sort((a, b) => a - b)[
        arr.filter((value) => value % 2 === 0).sort((a, b) => a - b).length - 1
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
const stringer = (string) =>
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
const acronymr = (string) =>
    string.split(' ').reduce((ac, cv) => ac + cv.charAt(0), '');

// console.log(acronymr('British Broadcasting Corporation'));
// console.log(acronymr('British Cazzoni Corporation'));
// console.log(acronymr('America Broadcasting Corporation Defe eee'));

/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.*/

function plusMinus(arr) {
    const arrLen = arr.length;
    const positives = arr.filter((el) => el > 0).length;
    const negatives = arr.filter((el) => el < 0).length;
    const zeros = arr.filter((el) => el === 0).length;
    console.log((positives / arrLen).toFixed(6));
    console.log((negatives / arrLen).toFixed(6));
    console.log((zeros / arrLen).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
