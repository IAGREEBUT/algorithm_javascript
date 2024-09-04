// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps2(n) {
    for(let i=1; i<=n; i++){
        let str = '';
        for(let j = 1 ; j<=i ; j++){
            str += "#"
        }
        for(let k = 1; k<=n-i ; k++){
            str += " "
        }
        console.log(str)
    }
}


function steps(n) {
    for(let i=1; i<=n; i++){
        let str = '';
        for(let j = 1 ; j<=n ; j++){
            if(j<=i) str += "#"
            else str += " "
        }
        console.log(str)
    }
}


function stepRecursion(n, row = 0, stair = ''){

    if(n==row) return; //completed all of work

    if(stair.length === n){
        console.log(stair)
        return stepRecursion(n,row+1) //go for next row
    }

    if(stair.length <= row){
        stair += "#"
    }else {
        stair += " "
    }
    stepRecursion(n,row, stair) //go for same row (attach the character)
}

module.exports = steps;
