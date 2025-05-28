function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let count1 = {};
    let count2 = {};
    // Count frequency of each character in str1
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        count1[char] = (count1[char] || 0) + 1;
    }
    // Count frequency of each character in str2
    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        count2[char] = (count2[char] || 0) + 1;
    }

    // Compare the two frequency objects
    for (let char in count1) {
        if (count1[char] !== count2[char]) {
            return false;
        }
    }
    return true;
}
console.log(areAnagrams("listen", "silent"));



//Check anagram of the input string has potential to become palindrome or not(problem solving)

  function canFormPalindrome(str) {
      const charCount = {}; // Object to store character frequencies
      // Count character frequencies
      for (let char of str) {
          charCount[char] = (charCount[char] || 0) + 1;
      }
      let oddCount = 0; // To track characters with odd occurrences
      // Check how many characters have an odd count
      for (let count of Object.values(charCount)) {
          if (count % 2 !== 0) {
              oddCount++;
          }
      }
      // A palindrome can have at most one character with an odd frequency
      return oddCount <= 1;
  }

  console.log(canFormPalindrome("civic")); // true (already a palindrome)
  console.log(canFormPalindrome("ivicc")); // true (can be rearranged to "civic")
  console.log(canFormPalindrome("hello")); // false (no anagram forms a palindrome)