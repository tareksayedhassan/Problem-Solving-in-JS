function removingAnotherItem(array) {
  //   let newArray = [];
  //   for (let i = 0; i < array.length; i++) {
  //     if (i % 2 === 0) {
  //       newArray.push(array[i]);
  //     }
  //   }
  //   return newArray;
  return array.filter((a, i) => i % 2 === 0);
}
console.log(
  removingAnotherItem([
    "tarek",
    "484848",
    "tarek",
    "sadadasd",
    "tarek",
    "sadsaf",
  ])
);
