// create new empty array
// loop though n
// multiply x * n
// add the number to the new array
// return the new array
function countbyx(x, n) {
  //   let newarray = [];
  //   for (let i = 1; i <= n; i++) {
  //     newarray.push(i * x);
  //   }
  //   return newarray;
  return Array.from(Array(n + 1).keys())
    .slice(1)
    .map((num) => num * x);
}
console.log(countbyx(1, 10));
