function isPrime(x: number): boolean {
  for (let i = 2; i < Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
}

function hasPrimeBetween(x: number, y: number): number | boolean {
  let primeNumber: number | boolean = false;

  for (let z = x + 2; z < y; z += 2) {
    if (isPrime(z)) {
      primeNumber = z;
    }
  }

  return primeNumber;
}

function gap(g: number, m: number, n: number): number[] | null {
  // rule out cases where g is even and m is greater than 2
  if (g % 2 !== 0) {
    if (2 < m || !isPrime(2 + g)) {
      return null;
    }

    if (g === 1 && m <= 1) {
      return [1, 2];
    }

    return [2, 2 + g];
  }

  // start at odd number
  m = m % 2 === 1 ? m : m + 1;

  // iterate through odd numbers checking if they're prime
  for (let x = m; x <= n - g; x += 2) {
    if (isPrime(x) && isPrime(x + g)) {
      if (g === 2) {
        return [x, x + g];
      }

      // check numbers in between
      if (!hasPrimeBetween(x, x + g)) {
        console.log(x, x + g);
        return [x, x + g];
      }
    }
  }

  return null;
}

export { isPrime, gap };
