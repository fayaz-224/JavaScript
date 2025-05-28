/*Merge two arrays also it should be an sorted while merging it. arr1 = [ 10, 20, 30, 45, 50], arr2 = [ 15, 25, 26, 35]

Approach?
If arrays are already sorted → Use Two-Pointer Approach (O(N)) ✅
If arrays are unsorted → Use .sort() after merging (O(N log N)) ❌ (Slower) */
//Sorted
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    // Add remaining elements if any
    while (i < arr1.length) merged.push(arr1[i++]);
    while (j < arr2.length) merged.push(arr2[j++]);
    return merged;
}
console.log(mergeSortedArrays(arr1, arr2));  // Output: [10, 15, 20, 25, 26, 30, 35, 45, 50]


//un-sorted
let mergedSorted = arr1.concat(arr2).sort((a, b) => a - b);
console.log(mergedSorted);   // Output: [10, 15, 20, 25, 26, 30, 35, 45, 50]