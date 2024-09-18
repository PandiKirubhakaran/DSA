// Ques 2 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3  ----->>>>>  Output: 2

// Normal Solution
var fib = function (n) {
    const arr = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  
    return arr[n];
  };

  console.log(fib(3)) 
  
  // Recursive Solution
  const fibRecursive= function (n) {
    if (n <= 1) return n;
   console.log(n-1,n-2,n-1+n-2)
    return fib(n - 1) + fib(n - 2);
  };

  console.log(fibRecursive(5))
  
  // One Liner
  const fibCleancode = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));
  
  // n = 3 => 1 + 1 => 2
  // fib(2) => 0 + 1 => 1