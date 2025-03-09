function hello_bouns(sallary, bouns) {
  //   if (bouns === true) {
  //     return "E " + sallary * 10;
  //   } else {
  //     return "E " + sallary;
  //   }
  return bouns ? `E ${sallary * 10}` : `E ${sallary}`;
}
console.log(hello_bouns(1000, false));
