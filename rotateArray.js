var rotate = (nums, k) => {
    const n = nums.length;
    k = k % n; // In case k is larger than the array length

    // Reverse the entire array
    reverse(nums, 0, n - 1);
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    // Reverse the remaining elements
    reverse(nums, k, n - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 3);
console.log(arr); // Output should be [5, 6, 7, 1, 2, 3, 4]
