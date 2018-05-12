# fibonacci number
- https://en.wikipedia.org/wiki/Fibonacci_number
- 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
- Each value is the sum of the previous 2 numbers.
- f(n) = f(n-1) + f(n-2)

> Given a value N, find the index value of the sequence

## 01: loop
- Complexity: `O(n)`

```javascript
const fibonacci = (n) => {
  let current = 0;
  let next = 1;

  while (num > 0) {
    [current, next] = [next, current + next];
    num--;
  }

  return current;
}
```

## 02: recursion
- Complexity: `O(2^n)`

```javascript
const fibonacci = (n) => {
  if (n === 1) return 1;
  if (n <= 0) return 0;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

## 03: recursion (tail-optimized)
- Complexity:
``` javascript
const fibonacci = (n, c = 0, n = 1) => n === 0 ? f : fibonacci(--n, n, c + s);
```

## 04: memoization
- Complexity: `2N`
``` javascript
const fibonacci = (n, memo = {}) => {
  if (memo[n]) return memo[n];
  if (n === 1) return 1;
  if (n <= 0) return 0;

  return memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo);
}
```

# fibonacci sequence generator
## 01: generator
```javascript
function* fibonacci(n) {
  const isInifite = n === undefined;

    let current = 0;
    let next = 1;

    while (isInifite || n--) {
      yield current;
      [current, next] = [next, current + next];
    }
}
```
