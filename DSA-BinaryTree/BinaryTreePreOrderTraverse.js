class Node{
    constructor(data,left,right){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

let root = new Node(10)
let B = new Node(20)
let C = new Node(30)
let D = new Node(40)
let E = new Node(50)
let F = new Node(60)
let G = new Node(70)
let H = new Node(80)
let I = new Node(90)
let J = new Node(100)
let K = new Node(110)

 root.left = B
 root.left.left = D
 root.left.left.left = H
 root.left.left.right = I
 root.left.right = E
 root.left.right.left = J
 root.right = C
 root.right.left = F
 root.right.right = G
 root.right.right.right = K

 function PreOrder(root){
    if(root == null){
        return
    }
    console.log(root.data + "->")
    PreOrder(root.left);
    PreOrder(root.right);
 }
PreOrder(root);