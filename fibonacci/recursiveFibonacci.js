function recursiveFibonacci(n, array = [0, 1]) {
  if (n < 2) {
    return array;
  } else {
    array.push(array[array.length - 1] + array[array.length - 2]);
    return recursiveFibonacci(n - 1, array);
  }
}

console.log(recursiveFibonacci(3));

// Fibonacci of number 0 = 0;
// Fibonacci of number 1 = 1;
// Fibonacci of number 2 = 1
// Fibonacci of number 3 = 2
// Fibonacci of number 4 = 3
// Fibonacci of number 5 =  5
// Fibonacci of number 6 = 8
// Fibonacci of number 7 = 13
// Fibonacci of number 8 = 21
// Fibonacci of number 9 = 34
// Fibonacci of number 10 = 55
