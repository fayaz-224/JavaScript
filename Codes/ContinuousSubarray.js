//find the continuous sub array of length M with largest sum.

function bruteForceMaxSum(arr, M) {
    let maxSum = -Infinity;

    for (let i = 0; i <= arr.length - M; i++) {
        let sum = 0;
        for (let j = i; j < i + M; j++) {
            sum += arr[j];
        }
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}