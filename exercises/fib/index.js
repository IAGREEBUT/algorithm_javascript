// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) { //exponential runtime (2^n)
    if(n<2) return n
    return fib(n-2) + fib(n-1) //reference (memoize(fib))

}

/*
memoization
save the result of function with specific argument
so we don't have to call function again with same argument( return exactly same result)

 */

function memoize(fn){ //param : function
    //storage area can record all the arguments that r used before
    const cache = {}
    return function(...args){ //fn(param) 's param ( don't know how many params fn gonna have)
        if(cache[args]){ //we already called fn(args) before -> so we record in cache
            return cache[args]
        }

        //this is first time we called fn with param args
        const result = fn.apply(this, args)//call original function
        cache[args]= result //and record the result once we called

    }

}

const fib = memoize(fib) //use the same function name to make it sure we r using improved fib(not fib, mean momoize(fib))


// function fib(n) {
//     let result = [0,1]
//     for(let i = 2; i<=n; i++){
//         result.push(result[i-2] + result[i-1])
//     }
//
//     return result[result.length-1]
//
// }

module.exports = fib;
