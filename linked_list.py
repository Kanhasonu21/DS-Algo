class Node:
    def __init__(self, data=None, next=None):
        self.head = data
        self.next = next


class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_beginning(self, data):
        node = Node(data, self.head)
        self.head = node

    def insert_at_last(self, data):
        if self.head is None:
            node = Node(data, self.head)
            self.head = node
            return
        itr = self.head
        while (itr.next):
            itr = itr.next
        itr.next = Node(data, None)

    def print_list(self):
        if (self.head is None):
            print('Linked List is empty')
            return

        itr = self.head
        list_value = ''
        while (itr):
            list_value += itr.head + '-->'
            itr = itr.next
        list_value += 'NULL'
        print(list_value)

    def length_of_list(self):
        count = 0
        itr = self.head
        while (itr):
            itr = itr.next
            count += 1
        return count

    def remove_at(self, index):
        if index < 0 or index >= self.length_of_list():
            raise Exception('Invalid Index')
        if index == 0:
            self.head = self.next.head
        count = 0
        itr = self.head
        while itr:
            if count == index - 1:
                itr.next = itr.next.next
                break
            itr = itr.next
            count += 1

    def insert_at(self, index, value):
        if index < 0 or index >= self.length_of_list():
            raise Exception('Invalid Index')

        if (index == 0):
            node = Node(value)
            node.next = self.head
            self.head = node
            return
        count = 0
        itr = self.head
        while (itr):
            if (count == index - 1):
                node = Node(value)
                node.next = itr.next
                itr.next = node
                break
            itr = itr.next
            count += 1

    def insert_after(self, after, value):
        if (self.length_of_list() > 0):
            itr = self.head
            while (itr):
                if (itr.head == after):
                    node = Node(value)
                    node.next = itr.next
                    itr.next = node
                itr = itr.next
        else:
            print('List is empty')


if __name__ == '__main__':
    linked_list = LinkedList()
    linked_list.insert_at_beginning('23')
    linked_list.insert_at_beginning('43')
    linked_list.insert_at_beginning('54')
    linked_list.insert_at_last('44')
    # linked_list.print_list()
    # linked_list.remove_at(2)
    linked_list.insert_at(0, '12')
    linked_list.insert_at(1, '15')
    # print(linked_list.length_of_list())
    # linked_list.insert_at(5,'105')
    linked_list.insert_after('54', '21')

    linked_list.print_list()
    print(linked_list.length_of_list())
