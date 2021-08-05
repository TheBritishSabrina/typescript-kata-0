function isPrime(x: number): boolean {
  for (let i = 2; i < Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
}

function gap(g: number, m: number, n: number): number[] | null {
  return null;
}

export default gap;
