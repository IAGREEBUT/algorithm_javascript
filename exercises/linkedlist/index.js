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

    removeLast(){

        if(!this.head) return;

        if(!this.head.next){
            this.head = null
            return;
        }

        // if(this.size() === 0 ) return
        // else if(this.size() === 1) {
        //     this.removeFirst()
        //     return
        // }
        // else if(this.size() === 2 ){
        //     this.head.next = null
        //     return
        // }

        let prevNode = this.head;
        let node = this.head.next;

        while(node.next){
            prevNode = node
            node = node.next
        }
        prevNode.next = null

    }

    insertLast(data){
        const last = this.getLast()

        if(last){
            last.next = new Node(data)
        }else{
            this.head = new Node(data)
        }
        // if(!this.head){
        //     this.head = new Node(data)
        // }
        // else{
        //     let node = this.head
        //
        //     while(node.next){
        //         node = node.next
        //     }
        //     node.next = new Node(data)
        //
        // }
    }

    getAt(index){
        let counter = 0
        let node = this.head
        while(node){
            if(counter === index){
                return node;
            }
            counter++
            node = node.next
        }
        return null

        // if(!this.head) return null;
        // let counter = 0
        // let node = this.head
        // if(index >= this.size()) return null
        // while(counter++ < index){
        //     node = node.next
        // }
        // return node
    }

    removeAt(index){
        if(!this.head) return

        if(index === 0){
            this.head = this.head.next
            return
        }

        const prevNode = this.getAt(index-1)
        if(!prevNode || !prevNode.next) return

        prevNode.next = prevNode.next.next //if there prevNode.next is null, u cant access prevNode.next.next

    }

    insertAt(data, index){

        if(!this.head){
            this.head = new Node(data)
        }

        if(index === 0){
            this.head = new Node(data, this.head)
        }

        const previous = this.getAt(index -1) || this.getLast()
        previous.next = new Node(data, previous.next)


        // const node = new Node(data)
        //
        // if(index === 0 || !this.head){
        //     node.next = this.head
        //     this.head = node
        //     return
        // }
        //
        // const prevNode = this.getAt(index-1)
        // if(!prevNode){
        //     this.getLast().next = node
        // }else{
        //     node.next = this.getAt(index)
        //     prevNode.next = node
        // }

    }
}

module.exports = { Node, LinkedList };
