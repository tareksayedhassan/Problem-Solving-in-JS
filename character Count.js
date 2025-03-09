// write function that take 2 params
// first paramter is string of one word
// second paramter is a character
// calculate the number of char that apper in the string

function cunt(str, char) {
  let c = 0;
  for (let i = 1; i < +str.length; i++) {
    if (str[i] == char) {
      c++;
    }
  }
  console.log(c);
}
cunt("tarek", "tarek");
