def kadanesAlgorithm(array):
    maximum_number, current_sum = array[0], array[0]
    for value in array[1:]:
        current_sum += value
        current_sum = max(current_sum, value)
        maximum_number = max(current_sum, maximum_number)
    return maximum_number


print(kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]))
