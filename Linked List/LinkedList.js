  class Node{

     constructor(data ){
        this.data = data
        this.next = null;         
     }
}



let head = new Node(10)
let second = new Node(20)
let third = new Node(30)
let fourth = new Node(40)

head.next = second;
second.next = third;
third.next = fourth;

let temp = head
while(temp != null){
  console.log(temp.data);
  temp = temp.next;
}
