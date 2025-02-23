function removeDuplicatesFromSortedArray(arr) {
  let l = 0;
  let r = 1;

  while (l < r && r < arr.length) {
    if (arr[l] === arr[r]) {
      arr.splice(r, 1);
    } else {
      l++;
      r++;
    }
  }

  return arr;
}
