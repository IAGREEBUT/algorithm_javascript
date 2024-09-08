// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

    //setting new array
    var arr = new Array(n);

    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(n);
    }


    //set the driection
    //R-> D-> L -> U -> R... (rotate)
    const dirArr = [
        [0,1], //R [0]
        [1,0], //D [1]
        [0,-1], //L [2]
        [-1,0], //U [3]
    ]


    let row = 0;
    let col = 0;
    let count = 1
    let dir = 0
    while(count <= n*n ){ //stop when we get n*n
        arr[row][col] = count++

        //check next stop is valid arr
        const nRow = row + dirArr[dir][0]
        const nCol = col + dirArr[dir][1]

        //need to turn when ...
        if(nRow <0 || nCol <0 || nRow>=n || nCol >=n || arr[nRow][nCol]) {
            dir = (dir+1)%4 //turn the direction
            row += dirArr[dir][0]
            col += dirArr[dir][1]
        }else{
            row = nRow
            col = nCol
        }

    }
    return arr
}

matrix(3)

module.exports = matrix;
