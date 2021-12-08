def reverse_linked_list(head):
    pointer1, pointer2 = None, head
    while pointer2 is not None:
        pointer3 = pointer2.next
        pointer2.next = pointer1
        pointer1 = pointer2
        pointer2 = pointer3
    return pointer1
