// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    //remove irrelvant character from string
    const a = stringA.replace(/[^\w]/g, "").toLowerCase();
    const b = stringB.replace(/[^\w]/g,"").toLowerCase();

    const aMap = {}
    const bMap = {}
    //create words map
    for(let c of a){
        aMap[c] = aMap[c]+1 || 1
    }
    for(let c of b){
        bMap[c] = bMap[c]+1 || 1
    }

    if(Object.keys(aMap).length !== Object.keys(bMap).length ) return false;

    for(let key in aMap){
        if(aMap[key] !== bMap[key]) return false;
    }

    return true;

}


//recommended! -> create helper function if we need to use it several itmes
function buildCharMap(str){
    const charMap = {}

    for(let char of str.replace(/[^\w]/g).toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1
    }

    return charMap
}

function anagrams2(stringA, stringB){
    const aCharMap = buildCharMap(stringA)
    const bCharMap = buildCharMap(stringB)

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length ) return false;

    for(let key in aCharMap){
        if(aCharMap[key] !== bCharMap[key]) return false;
    }

    return true;
}



function anagrams3(stringA, stringB){
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str){
    return str.replace(/[^\w]/g,"") //remain only characters
        .toLowerCase() // to lowercase
        .split('').sort() // make array to sort
        .join('') //back to string
}


module.exports = anagrams;
