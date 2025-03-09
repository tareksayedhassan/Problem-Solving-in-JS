function ava(array) {
  return array.reduce((acc, current) => acc + current, 0) / array.length;
}
console.log(ava([1, 2, 3, 4, 5, 6]));
