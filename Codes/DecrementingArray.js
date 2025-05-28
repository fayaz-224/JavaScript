function isDecrementing(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {
            return false; // Not strictly decreasing
        }
    }
    return true; // Strictly decreasing
}

//another ex
const isDecrementing2 = (arr) => arr.every((val, i) => i === 0 || val < arr[i - 1])

// Example Usage
console.log(isDecrementing([10, 8, 5, 3, 1])); // true
console.log(isDecrementing([5, 5, 3, 2, 1]));  // false (not strictly decreasing)
console.log(isDecrementing([10, 12, 8, 5]));   // false (not decreasing)
console.log(isDecrementing([9]));              // true (single element)
console.log(isDecrementing([]));               // true (empty array)