// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let newLinkedListHead = new LinkedList(0);
  let currentNode = newLinkedListHead;
  let link1 = linkedListOne;
  let link2 = linkedListTwo;
  let carry = 0;
  while (link1 !== null || link2 !== null || carry !== 0) {
    valueOne = link1 !== null ? link1.value : 0;
    valueTwo = link2 !== null ? link2.value : 0;
    let sumOfValues = valueOne + valueTwo + carry;

    let finalValue = sumOfValues % 10;
    let tempNode = new LinkedList(finalValue);
    currentNode.next = tempNode;
    currentNode = tempNode;

    carry = Math.floor(sumOfValues / 10);
    link1 = link1 !== null ? link1.next : null;
    link2 = link2 !== null ? link2.next : null;
  }
  return newLinkedListHead.next;
}


// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
// {
//  "linkedListOne": {
//    "head": "2",
//    "nodes": [
//      {"id": "2", "next": "4", "value": 2},
//      {"id": "4", "next": "7", "value": 4},
//      {"id": "7", "next": "1", "value": 7},
//      {"id": "1", "next": null, "value": 1}
//    ]
//  },
//  "linkedListTwo": {
//    "head": "9",
//    "nodes": [
//      {"id": "9", "next": "4", "value": 9},
//      {"id": "4", "next": "5", "value": 4},
//      {"id": "5", "next": null, "value": 5}
//    ]
//  }
// }