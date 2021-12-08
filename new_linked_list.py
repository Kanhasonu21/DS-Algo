class Node:
    def __init__(self, head=None, next=None):
        self.head = head
        self.next = next


class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_begining(self, data):
        node = Node(data, self.head)
        self.head = node

    def print_linked_list(self):
        if self.head is None:
            print('Linked List is empty')
            return
        llstr = ''
        itr = self.head
        while itr:
            llstr += str(itr.head) + '-->'
            itr = itr.next

        llstr += 'Null'
        print(llstr)


if __name__ == '__main__':
    ll = LinkedList()
    ll.insert_at_begining(23)
    ll.insert_at_begining(24)
    ll.print_linked_list()
