// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let arrays = []
    let subArray = []
    for( let num of array){
        subArray.push(num)

        if(subArray.length === size){
            arrays.push(subArray)
            subArray = []
        }
    }

    if(subArray.length !== 0){
        arrays.push(subArray)
    }

    return arrays

}



function chunk2(array, size)
{

    const chunked = []// array of chunk

    for(let element of array){
        const last = chunked[chunked.length-1] // last element of chunked

        if(!last || last.length === size){ //1. not exist -> push new array(with element) 2. fulled -> push new array(with element)
            chunked.push([element])
        }else{//not fulled yet -> push new element to the last
            last.push(element)
        }

    }

}


function chunk3(array, size)
{

    const chunked = []// array of chunk

    let idx = 0
    while(idx < array.length){
        chunked.push(array.slice(idx, idx+size))
        idx += size
    }

    return chunked

}


module.exports = chunk;
