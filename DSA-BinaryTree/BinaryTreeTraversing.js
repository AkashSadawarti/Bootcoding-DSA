// Class created for single root which has left and right nodes to it
class Node{
    constructor(data,left,right){
        this.data = data
        this.left = null
        this.right = null
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
root.left.left = X;     //B-> X(left) & Y(right)
root.left.right = Y;    
root.right = C; //A(root)-> C
root.right.left = P;    //B-> P(left) & Q(right)
root.right.right = Q;


//print the right and left elements by log
console.log("==========Root A===========")
console.log("root element is " + root.data)
console.log("left of root is " + root.left.data)
console.log("right of root is " + root.right.data)
console.log("==========Node B===========")
console.log("left of Node B is " + root.left.left.data) //X
console.log("right of Node B is " + root.left.right.data) //y
console.log("==========Node C===========")
console.log("left of Node C is " + root.right.left.data) //P
console.log("right of Node C is " + root.right.right.data) // q

//Inorder Traversing (left - root - right)
function Inorder(root){
    if(root == null){
        return;
    }
    Inorder(root.left);
    console.log(root.data + "->");
    Inorder(root.right)
}
Inorder(root); 
