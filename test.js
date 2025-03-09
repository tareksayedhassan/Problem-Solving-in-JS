async function getuser() {
  try {
    let users = await fetch("http://127.0.0.1:8000/api/user/shows");
    console.log(await users.json());
  } catch (err) {
    console.log("the Error is a7a ");
  }
}
getuser();
