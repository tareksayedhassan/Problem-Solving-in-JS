function Countofpositivessumofnegatives(array) {
  let countPositive = [];
  let sumnigatve = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      countPositive.push(array[i]);
    } else {
      sumnigatve += array[i];
    }
  }
  return [countPositive.length, sumnigatve];
}
console.log(Countofpositivessumofnegatives([1, 2, 3, 7, -8, -6, 1]));
