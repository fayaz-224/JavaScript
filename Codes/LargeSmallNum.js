//Largest number
function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            // Update the largest if a bigger element is found
            largest = arr[i];
        }
    }
    return largest;
}

console.log(findLargest([99, 5, 3, 100, 1]));

//or
const numbers = [10, 5, 100, 25];
const max = numbers.reduce((a, b) => a > b ? a : b);
console.log(max); // 👉 100

//or
const max2 = Math.max(...numbers);
console.log(max2); // 👉 100



//Smallest number
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            // Update min if a smaller value is found
            min = arr[i];
        }
    }
    return min;
}

console.log(findMin([5, 10, -1, 8]));

//or
function findMin(arr) {
  return Math.min(...arr);
}

console.log(findMin([5, 10, -1, 8]));