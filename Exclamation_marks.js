function removestr(str) {
  return str.replace(/!$/, "");
}
console.log(removestr("!!hi!!!"));
