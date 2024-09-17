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

    getFirst(){
        return this.head
    }

    getLast(){
        let node = this.head
        while(node){
            if(!node.next) return node
            node = node.next
        }
        return node
    }

    clear(){
        this.head = null
    }

    removeFirst(){
        if(!this.head) return// if it is empty list, this.head.next is non-readable
        this.head = this.head.next
    }
}

module.exports = { Node, LinkedList };
