// == Part 1 == //
let count = 0;

function measureStackDepth() {
  count++;
  measureStackDepth();
}

try {
  measureStackDepth();
} catch (error) {
  console.log("Maximum call stack size exceeded:", count);
}


// == part 2 == //
function factorial(n) {
  return n === 0 ? 1 : () => factorial(n - 1) * n;
}

function trampoline(f, ...args) {
  let result = f(...args);
  while (typeof result === "function") {
    result = result();
  }
  return result;
}

console.log(trampoline(factorial, 10000));


// == part 3 == //
function isPrime(num) {
  if (num <= 1) return false; 
  if (num <= 3) return true; 
  if (num % 2 === 0 || num % 3 === 0) return false; 
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

function renderPrimeNumbers(n) {
  let primeNumbers = [];
  let i = 2;

  function renderPrimes(i) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
    if (i < n) {
      setTimeout(() => renderPrimes(i + 1), 0);
    } else {
      console.log("Prime numbers:", primeNumbers.join(", "));
    }
  }

  renderPrimes(i);
}

renderPrimeNumbers(10000);
