class Node:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next


class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_beginning(self, data):
        node = Node(data, self.head)
        self.head = node

    def print_list(self):
        if self.head is None:
            print('List is empty')
            return
        itr = self.head
        llstr = ''
        while itr is not None:
            llstr += str(itr.data) + '-->'
            itr = itr.next
        llstr += 'None'
        print(llstr)

    def insert_array(self, array):
        self.head = None
        for data in array:
            self.insert_at_beginning(data)

    def remove_duplicate(self):
        current_node = self.head
        while current_node is not None:
            next_distinct_node = current_node.next
            while next_distinct_node is not None and next_distinct_node.data == current_node.data:
                next_distinct_node=next_distinct_node.next
            current_node.next = next_distinct_node
            current_node = next_distinct_node


ll = LinkedList()
ll.insert_array([1, 3, 3, 3, 5, 6, 4, 8, 9])
ll.remove_duplicate()
ll.print_list()
