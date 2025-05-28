//iterative approach
function generateFibonacci(n) {
  const fib = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) fib.push(0);
    else if (i === 1) fib.push(1);
    else fib.push(fib[i - 1] + fib[i - 2]);
  }

  return fib;
}

// Example: Get first 10 Fibonacci numbers
console.log(generateFibonacci(10));



//Recursive approach
function fibonacciRecursive(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function generateFibonacciRecursive(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(fibonacciRecursive(i));
  }
  return result;
}

// Example: Get first 10 Fibonacci numbers
console.log(generateFibonacciRecursive(10));
