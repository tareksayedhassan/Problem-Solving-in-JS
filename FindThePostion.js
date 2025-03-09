function findThePostion(letter) {
  let alphpet = "abcdefghijklmnoqprstuvwxyz";
  for (let i = 0; i < alphpet.length; i++) {
    if (alphpet[i] === letter) {
      return `postion the Alphapet is ${i + 1}`;
    }
  }
}
console.log(findThePostion("z"));
