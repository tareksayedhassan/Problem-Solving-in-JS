// Turn the String into Array
// Loop through the Array
//  Repeat Each Element once
// return the Array into String again

function DoubleChar(str) {
  return str
    .split("")
    .map((s) => s.repeat(2))
    .join("");
}
console.log(DoubleChar("swsan"));
