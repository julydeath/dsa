function primeNumber(number) {
  if (number < 2) {
    return false;
  }

  if (number === 2) {
    return true;
  }

  let x = Math.round(Math.sqrt(number));

  for (let i = 2; i <= x; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(primeNumber(5));
