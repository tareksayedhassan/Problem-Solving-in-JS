function consactive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - 1 !== arr[i - 1]) return arr[i];
  }
  return null;
}
console.log(consactive([1, 2, 3, 4, 6, 7]));
