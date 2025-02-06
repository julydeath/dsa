function climbingStairs(n) {
  let numberOfWays = [1, 2, 3];

  if (n <= 3) {
    return n;
  }

  for (let i = 3; i < n; i++) {
    numberOfWays.push(numberOfWays[i - 1] + numberOfWays[i - 2]);
  }

  const result = numberOfWays.pop();
  return result;
}

console.log(climbingStairs(7));
