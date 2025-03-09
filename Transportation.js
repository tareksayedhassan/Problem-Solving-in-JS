// defind the price
// if dyes =7 || > 7 price === 50 anoter 20

function weekend(dyes) {
  let price = 40 * dyes;
  if (dyes >= 7) {
    return price - 50;
  } else if (dyes >= 3) {
    return price - 20;
  } else if (dyes < 3) {
    return price;
  }
}
console.log(weekend(7));
