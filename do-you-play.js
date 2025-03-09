function doYouPlayBango(name) {
  //   if (name.startsWith("r" || "R")) {
  //     return name + " you playing bango";
  //   } else {
  //     return name + " does you not play bango";
  //   }
  return /^r/i.test(name)
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}
console.log(doYouPlayBango("tarek"));
