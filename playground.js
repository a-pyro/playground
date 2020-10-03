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