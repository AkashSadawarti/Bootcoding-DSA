class Node{
    constructor(data,left,right){
        this.data = data
        this.left = left
        this.right = right
    }

}

let root = new Node('A')
let B = new Node('B')
let C = new Node('C')

root.left = B;
root.right = C;

console.log("root element is " + root.data)
console.log("left of root is " + root.left.data)
console.log("right of root is " + root.right.data)
