// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    data
    next

    constructor(data, next = null) { //default = null (not undefined)-
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data){
        this.head = new Node(data, this.head)
        // if(!head){
        //     this.head = new Node(data)
        // }else{
        //     const firstNode = new Node(data)
        //     firstNode.next = this.head
        //     this.head = firstNode
        // }
    }

    size(){
        let count = 0
        let node = this.head
        while(node){
            count++
            node = node.next
        }
        return count
    }


}

module.exports = { Node, LinkedList };
