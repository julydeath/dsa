function powerOfTwo(number) {
  if (number <= 0) {
    return false;
  }
  while (number > 1) {
    if (number % 2 !== 0) {
      return false;
    }
    number = number / 2;
  }
  return true;
}

console.log(powerOfTwo(18));
