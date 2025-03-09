function find(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Needle") {
      return " found the Needle at position" + i;
    }
  }
}
console.log(find(["hay", "junk", "Needle", "hay"]));
