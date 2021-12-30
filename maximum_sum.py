def kadanesAlgorithm(array):
    maximum_number, current_sum = array[0], array[0]
    for value in array[1:]:
        current_sum += value
        current_sum = max(current_sum, value)
        maximum_number = max(current_sum, maximum_number)
    return maximum_number


print(kadanesAlgorithm([3, 4, -6, 7, 8]))
