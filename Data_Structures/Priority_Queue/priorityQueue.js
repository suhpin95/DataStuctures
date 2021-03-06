/**
 * Implement Min Heap Tree
 * Because least priority 
 * has maximum value
 */

class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}
class PriorityQueue{
    constructor(){
      this.values = [];
   }
   /**
    * 
    * @param {*} val 
    * @param {*} priority 
    */
   enqueue(val, priority){
       // push the node
       let newNode = new Node(val,priority)
       this.values.push(newNode);
       this.bubbleUp();
   }
   
   bubbleUp(){
       let childIndex = this.values.length - 1 ;
       const childVal = this.values[childIndex];

       // repeat until the index > 0
       while(childIndex > 0){
           let parentIndex = Math.floor((childIndex - 1) / 2 );
           let parentVal = this.values[parentIndex];
           
            // compare the priorities of child and parent
           if(parentVal.priority <= childVal.priority) break;
           
           // swap to the right position
           this.values[parentIndex] = childVal;
           this.values[childIndex] = parentVal;
           
           // change the index
           childIndex = parentIndex;
       }
   }

   dequeue(){
    // swap the first and last element
    let min = this.values[0];
    let end = this.values.pop();
    if(this.values.length > 0 ){
        this.values[0] = end;
        this.trikleDown();
    }
    // re-adjust so that the property of the heap is maintained
    
    return min;
   }

   trikleDown(){
       let index = 0;
        const length = this.values.length;
        const parent = this.values[0];
        while(true){
            let leftIndex =  2 * index + 1;
            let rightIndex = 2 * index + 2;
            // Not initalizing so that we need not have to face with out of bounds exception
            let leftChild ,rightChild
            let swap = null;
            if(leftIndex < length){
                leftChild = this.values[leftIndex];
                if(parent.priority > leftChild.priority){
                    swap = leftIndex;
                }
            }
            if(rightIndex < length){
                rightChild = this.values[rightIndex];
                // checks the case where the parent is less than left and right
                // and right is the greatest amongst the two
                if( 
                    (swap === null && parent.priority > rightChild.priority) || 
                    (swap !== null && leftChild.priority > rightChild.priority)
                  )
                {
                    swap = rightIndex;
                }
            }
            // break if no swaps will be performed
            if(swap === null)break;
            this.values[index] = this.values[swap];
            this.values[swap] = parent;
            index = swap;
        }
   }
}