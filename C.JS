class Node {
    constructor(value){
        this.value = value
        this.next = null
    }

}


class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    
    }
  
  
  pop(){
    
    // if there is no node return null
    if(!this.first) return null
    // if there are nodes
    let temp = this.first
    // if only one node, set the first to null
    if(this.first === this.last){
          this.last = null
    }
    
    //set the first to be the next node
    this.first = this.first.next
   
    //decrement the size
    this.size--
    
    //return removed node value
    return temp.value
  
  
  
  
  }
}