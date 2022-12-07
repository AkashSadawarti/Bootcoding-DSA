class Node1{

    constructor(data ){
       this.data = data
       this.next = null;         
    }
}


let NewNode = new Node1(150)
let head1 = new Node1(10)
let second1 = new Node1(20)
let third1 = new Node1(30)
let fourth1 = new Node1(40)
//let lastNode = new Node1(200)

head1.next = second1;
second1.next = third1;
third1.next = fourth1;


function printlinkedlist(head1){

    let temp = head1
    while(temp != null){
        console.log(temp.data);
        temp = temp.next;
    }
}

//Delete Last Node
function deletelastNode(head1){
    console.log("DELETE Last Node")
     temp = head1
     while(temp != null){
        if(temp.next != null && temp.next.next == null){
            temp.next = null;
        }
        temp = temp.next;
     }
     printlinkedlist(head1)
    } 

    //Delete first Node
    function deletefirstNode(head1){
        console.log('Delete FirstNode')
        head1 = head1.next
        printlinkedlist(head1)
    }

//Insertion NewNode in first position

function insertfirstnode(head1){
    console.log("insert new first node ")
    NewNode.next = head1;
    head1 = NewNode;
    printlinkedlist(head1)
 }

//Insertion new node at last position
function insertlastnode(head1){
    console.log('Insert new last Node')
    let t = head1
    let lastNode = new Node1(200)
    while(t.next != null){
       t = t.next;
    }
    t.next = lastNode;
    printlinkedlist(head1)
}
printlinkedlist(head1)
deletefirstNode(head1)
deletelastNode(head1)
insertfirstnode(head1)
insertlastnode(head1)