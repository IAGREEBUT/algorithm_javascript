// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = ""

    for(let char of str){
        reversed = char + reversed
    }
    return reversed
}


function reverse2(str) {
    return str.split('') //make str to Array
        .reverse()//reverse it
        .join('')//make array to str
}

function reverse3(str) {
    return str.split('')
        .reduce((reversed, char) =>  // (last return of arrow function, str.split('') array
            char + reversed
            ,'') //initial value of arrow function
}

module.exports = reverse;
