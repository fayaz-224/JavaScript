//strings
function isPalindromeNumber(num) {
    // Convert number to string
    let str = num.toString();
    // Check if the string is the same as its reverse
    return str === str.split('').reverse().join('');
}
// Example test cases
console.log(isPalindromeNumber(121));   // true
console.log(isPalindromeNumber(-121));  // false (negative numbers are not palindromes)


//Integer
function isPalindromeNumber(num) {
    // Negative numbers cannot be palindromes
    if (num < 0) return false;
    let original = num, reversed = 0;
    // Reverse the number
    while (num > 0) {
        let digit = num % 10;      // Get the last digit
        reversed = reversed * 10 + digit;  // Append digit to reversed number
        num = Math.floor(num / 10);  // Remove last digit
    }
    return original === reversed; // Compare reversed number with original
}
