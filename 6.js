// initial value of zero
// Loop through the array
// check if the sheep=== True , increase the intial value +1
function addSheep(arraysheep) {
  let Counter = 0;
  arraysheep.map((m) => {
    if (m === true) return Counter++;
  });
  return Counter;
}
