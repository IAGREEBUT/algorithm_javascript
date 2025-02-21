// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    //property
    data

    constructor() {
        this.data = []//set as empty array
    }

    add(record){
        this.data.unshift(record) //use array.unshift as add for queue
    }

    remove(){
        return this.data.pop()
    }

    peek(){
        return this.data[this.data.length-1]
    }

}

module.exports = Queue;
