// Class created for single root which has left and right nodes to it
class Node{
    constructor(data,left,right){
        this.data = data
        this.left = left
        this.right = right
    }

}

//Initialising the roots and nodes its data so A is root node B & C are left and right node 
let root = new Node('A')
let B = new Node('B')
//X & Y are left and right nodes of  B
let X = new Node('X')
let Y = new Node('Y')
let C = new Node('C')
//P & Q are left and right nodes of  C
let P = new Node('P')
let Q = new Node('Q')

//Path for root and nodes
root.left = B;   //A(root)-> B
B.left = X;     //B-> X(left) & Y(right)
B.right = Y;    
root.right = C; //A(root)-> C
C.left = P;    //B-> P(left) & Q(right)
C.right = Q;


//print the right and left elements by log
console.log("==========Root A===========")
console.log("root element is " + root.data)
console.log("left of root is " + root.left.data)
console.log("right of root is " + root.right.data)
console.log("==========Node B===========")
console.log("left of Node B is " + B.left.data)
console.log("right of Node B is " + B.right.data)
console.log("==========Node C===========")
console.log("left of Node C is " + C.left.data)
console.log("right of Node C is " + C.right.data)