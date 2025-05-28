//iterative approach
function factorial(num) {
    let answer = 1;
    for (let i = 2; i <= num; i++) {
        answer *= i;
    }
    return answer;
}

console.log(factorial(7));


//Recursive approach
function factorialRecursive(n) {
  if (n === 0 || n === 1) return 1;  // Base case
  return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(7));