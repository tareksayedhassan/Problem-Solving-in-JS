// if char or text = empty return ''
// variable = empty
// for loop text
function contamination(text, char) {
  if (text === "" || char === "") {
    return "";
  }
  let result = "";
  for (let i = 0; i < text.length; i++) {
    result += char;
  }
  return result;
}
console.log(contamination("swsan", "@"));
