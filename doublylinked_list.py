# This is an input class. Do not edit.
class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None


# Feel free to add new properties and methods to the class.
class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def setHead(self, node):
        if self.head is None:
            self.head = node
            self.tail = node
            return
        self.head.prev = node

    def setTail(self, node):
        if self.tail is None:
            self.setHead(node)
        itr = self.head
        while itr.next:
            itr = itr.next
        itr.next = node
        node.prev = itr

    def insertBefore(self, node, nodeToInsert):
        if self.head == nodeToInsert or self.tail == nodeToInsert:
            return
        nodeToInsert.prev = node.prev
        nodeToInsert.next = node
        if node.prev is None:
            self.head = nodeToInsert
        else:
            node.prev.next = nodeToInsert
        node.prev = nodeToInsert

    def insertAfter(self, node, nodeToInsert):
        if self.head == nodeToInsert and self.tail == nodeToInsert:
            return
        nodeToInsert.prev = node
        nodeToInsert.next = node.next
        if node.next is None:
            self.tail = nodeToInsert
        else:
            node.next.prev = nodeToInsert
        node.next = nodeToInsert

    def insertAtPosition(self, position, nodeToInsert):
        if position == 1:
            self.head = nodeToInsert
            return
        node = self.head
        currentPosition = 1
        while node is not None and currentPosition != position:
            node = node.next;
            currentPosition += 1
        if node is not None:
            self.insertBefore(node, nodeToInsert)
        else:
            self.setTail(nodeToInsert)

    def removeNodesWithValue(self, value):
        if self.head is None and self.tail is None:
            return
        node = self.head
        while node is not None:
            if node.value == value:
                self.remove(node)
            node = node.next

    def remove(self, node):
        if node.prev is not None:
            node.prev.next = node.next
        if node.next is not None:
            node.next.prev = node.prev
        node.prev = None
        node.next = None

    def containsNodeWithValue(self, value):
        node = self.head
        while node is not None:
            if node.value == value:
                return True
            node = node.next
        return False
