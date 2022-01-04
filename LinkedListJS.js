class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBegining(num) {
    let node = new Node(num, this.head);
    this.head = node;
  }

  insertArray(list) {
    list.map(item => this.insertAtBegining(item));
  }

  deleteHead() {
    if (this.head === null) {
      console.log('Linked List is empty');
      return false;
    }
    this.head = this.head.next;
  }

  deleteElement(value) {
    if (this.head === null) {
      console.log('Linked List is empty');
      return false;
    } else if (value === this.head.data) {
      this.deleteHead();
    } else {
      let itr = this.head;
      while (itr) {
        if (itr.next !== null && itr.next.data === value) {
          itr.next = itr.next.next;
        }
        itr = itr.next;
      }
    }
  }

  insertAtPosition(index, value) {
    if (index <= 0) {
      console.log('Please give positive number');
      return;
    }
    if (index === 1) this.insertAtBegining(value);
    else {
      let count = 1;
      let itr = this.head;
      while (itr) {
        if (count === index - 1) {
          let node = new Node(value);
          node.next = itr.next;
          itr.next = node;
        }
        count += 1;
        itr = itr.next;
      }
      if (index > count) {
        console.log('Position is greater than linked list');
      }
    }
  }
  reverseList() {
    let currentValue= this.head
    let prevValue = null
    while(currentValue){
     let nextValue=currentValue.next
     currentValue.next = prevValue
     prevValue = currentValue
     currentValue = nextValue
    }
  }
   // Null->1->2->3->4-Null
  printLinkedList() {
    let itr = this.head;
    let llString = '';
    while (itr) {
      llString += itr.data + '-->';
      itr = itr.next;
    }
    console.log(llString + 'NULL');
  }
}

let ll = new LinkedList();
// ll.insertAtBegining(2);
// ll.insertAtBegining(3);
ll.insertArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// ll.printLinkedList();
// ll.deleteHead();
// ll.deleteElement(5);
ll.insertAtPosition(2, 23);
ll.printLinkedList();
ll.reverseList();
ll.printLinkedList();