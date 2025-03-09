// change the Number to string
// split the string to array
// change the strings in the array to Number
// Revers the array
function digts(n) {
  return n
    .toString()
    .split("")
    .map((m) => Number(m));
}
console.log(digts(147852369));
