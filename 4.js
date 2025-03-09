// Loop through the Array
// Check if the number has an integer Square root or not
// if true Take the root , if false Square the number
// return the new Array
//   let newarray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Number.isInteger(Math.sqrt(array[i]))) {
//       newarray.push(Math.sqrt(array[i]));
//     } else {
//       newarray.push(array[i] * array[i]);
//     }
//   }
//   return newarray;
function squrt(array) {
  return array.map((number) =>
    Number.isInteger(Math.sqrt(number)) ? Math.sqrt(number) : number * number
  );
}
console.log(squrt([4, 3, 9, 7, 2, 1]));
