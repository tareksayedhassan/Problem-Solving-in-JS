function invirt(array) {
  //   let init = [];
  //   for (let i = 0; i < array.length; i++) {
  //     init.push(-array[i]);
  //   }
  //   return init;
  return array.map((x) => x * -1);
}
console.log(invirt([10, -50, 30, -80]));
