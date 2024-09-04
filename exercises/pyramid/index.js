// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid2(n) {

    for(let i = 1; i<=n ; i++){
        let level = ''
        for(let j = 1; j <= n*2 -1 ; j++){
            if( j < n - (i - 1) || j > n + (i - 1) ){ // n is midpoint
                level += ' '
            }else {
                level += '#'
            }
        }
        console.log(level)
    }
}

function pyramid(n) {

    const mid = Math.floor( (2*n -1) /2)

    for(let i = 0; i<n ; i++){
        let level = ''
        for(let j = 0; j < n*2 -1 ; j++){
            if( j < mid - i || j > mid + i ){ // n is midpoint, +- the number of #(which means row)
                level += ' '
            }else {
                level += '#'
            }
        }
        console.log(level)
    }
}


function pyramidRecursion(n,row = 0,level = ''){

    if(row === n){
        return
    }

    const mid = Math.floor((2 * n-1)/2)

    if(level.length === 2*n-1){ //size of column (2*n-1)
        console.log(level)
        pyramidRecursion(n, row+1)
    }

    if(level.length < mid - row || level.length > mid + row) level += ' '
    else level += '#'
    pyramidRecursion(n,row, level)

}


module.exports = pyramid;
