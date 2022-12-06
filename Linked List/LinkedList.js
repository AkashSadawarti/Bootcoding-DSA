
//Class tells you that next node is by default null
class Node{

     constructor(data ){
        this.data = data
        this.next = null;         
     }
}

//Defining nodes with its values

let head = new Node(10)
let second = new Node(20)
let third = new Node(30)
let fourth = new Node(40)

//Nodes path is defined eg Node1(head)-->node2-->node3-->node4 
head.next = second;
second.next = third;
third.next = fourth;

//program for continue to next until it becomes null
let temp = head
while(temp != null){
  console.log(temp.data);
  temp = temp.next;
}
