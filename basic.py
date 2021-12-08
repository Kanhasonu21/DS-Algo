def largest_subarray(arr):
    total_sum = arr[0]
    for x in range(1, len(arr)):
        # total_sum += arr[x]
        if total_sum >= arr[x]:
            total_sum += arr[x]
        else:
            total_sum = 0
    return total_sum


print(largest_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
