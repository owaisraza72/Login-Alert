function login() {
  let userInputMail = document.getElementById("mail");
  let userMail = userInputMail.value;
  let userInputPassword = document.getElementById("password");
  let userPassword = userInputPassword.value;

  if (userMail === "owais@gmail.com" && userPassword === "owais") {
    alert("Login successfull");
    console.log("Login successfull");
  } else {
    alert("Enter valid gmail or password");
    console.log("Enter valid gmail or password");
  }
}
