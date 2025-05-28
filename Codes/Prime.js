function isPrime(num) {
    if (num < 2) return false; // 0 and 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Found a divisor, not prime
    }
    return true; // Prime number
}

// Test cases
console.log(isPrime(2));  // true
console.log(isPrime(18)); // false