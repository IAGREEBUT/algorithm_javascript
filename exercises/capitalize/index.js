// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const strArr = str.split(' ')
    const resultArr = []

    for(let a of strArr){
        resultArr.push(a[0].toUpperCase() + a.slice(1))
    }

    return resultArr.join(" ")
}


function capitalize2(str){
    let result = str[0].toUpperCase()//hard coded is not good

    for(let i = 1 ; i<str.length ; i++){
        if(str[i-1] === ' ') result += str[i].toUpperCase()
        else result += str[i]
    }
    return result
}

capitalize('a short sentence')

module.exports = capitalize;
