// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const char = {}

    for( let c of str){
        char[c] = char[c] + 1 || 1 // if char[c] is null, null+1 is null which refers falsy, then char[c] became 1

        // if(char[c]){
        //     char[c] ++
        // }else{
        //     char[c] = 1
        // }
    }

    let maxValue = 0
    let maxKey = ''

    for( let key in char){
        if(char[key] > maxValue){
            maxValue = char[key]
            maxKey = key
        }
    }

    return maxKey

}


module.exports = maxChar;
