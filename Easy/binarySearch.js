function binary(arr, t) {
  let i = 0;

  let j = arr.length - 1;

  while (i <= j) {
    let r = Math.floor(i + j / 2);

    if (arr[r] === t) {
      return r;
    } else if (arr[r] < t) {
      i = r + 1;
    } else {
      j = r - 1;
    }
  }

  return -1;
}

console.log(binary([1, 2, 3, 4, 5, 16, 23, 456], 456));
