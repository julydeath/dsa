function cartesian(a, b) {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      result.push([a[i], b[j]]);
    }
  }

  return result;
}

console.log(cartesian([1, 2], [3, 4, 5]));
