function fibonacci(number) {
  let result = [0, 1];

  for (let i = 2; i < number; i++) {
    const x = result[i - 2] + result[i - 1];
    result.push(x);
  }

  return result;
}

console.log(fibonacci(2));
