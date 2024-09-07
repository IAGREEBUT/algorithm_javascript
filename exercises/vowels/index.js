// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0
    for(let char of str.toLowerCase()){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') count++
    }
    return count
}

function vowels2(str) {
    let count = 0
    const checker = ['a','e','i','o','u'] //also works with "aeiou" but array is
    for(let char of str.toLowerCase()){
        if(checker.includes(char)) count++
    }
    return count
}

function vowels3(str) {

    //i: case insensitive
    //g: dont stop til the end
    const matches = str.match(/[aeioe]/gi)  //return

    return matches ? matches.length : 0
}


module.exports = vowels;
