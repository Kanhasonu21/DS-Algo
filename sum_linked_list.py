class Node:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next


class LinkedList:
    def __init__(self):
        self.head = None

    def setHead(self, value):
        node = Node(value, self.head)
        self.head = node

    def printLL(self):
        if self.head is None:
            print('List is empty')
            return
        itr = self.head
        llstring = ''
        while itr is not None:
            llstring += str(itr.data) + '-->'
            itr = itr.next
        llstring += 'None'
        print(llstring)

    def insert_array(self, value):
        for data in value:
            self.setHead(data)


def sumOfLinkedLists(linkedListOne, linkedListTwo):
    itr = linkedListOne.head
    value = ''
    while itr is not None:
        value += str(itr.data)
        itr = itr.next
    itr2 = linkedListTwo.head
    value2 = ''
    while itr2 is not None:
        value2 += str(itr2.data)
        itr2 = itr2.next
    sum = list(str(int(value)+int(value2)))
    ll_3 = LinkedList()
    ll_3.insert_array(sum)
    ll_3.printLL()



ll_1 = LinkedList()
ll_2 = LinkedList()
ll_1.insert_array([2, 4, 3])
ll_2.insert_array([5, 6, 4])
ll_2.printLL()
ll_1.printLL()
sumOfLinkedLists(ll_1, ll_2)
