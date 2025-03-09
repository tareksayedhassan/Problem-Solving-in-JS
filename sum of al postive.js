// You get an array of numbers, return the sum of all of the positives ones.

// InitValue = 0
// Array Loop
// Check if the number is positive or not
// Add the number to the initValue if Positive
// القيه الافتراضيه بتاعتها 0 وبتاخد لوب عشان تعدي على كل العناصر تعمل عمليه حسابيه عليها وترجع منها الموجب فقط وهو الاكبر من 0 وترجع لك فقط الموجب
function sum(arr) {
  return arr.filter((x) => x > 0);
  //   let initvalue = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > 0) {
  //       initvalue += arr[i];
  //     }
  //   }
  //   return initvalue;
}
console.log(sum([1000, 100, 5, -20, -100, -1000]));
