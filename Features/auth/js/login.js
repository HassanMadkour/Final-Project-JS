import { CookieHandler } from "../../../js/cookie_handler.js";
import { StyleHelper } from "../../../js/style.js";
import { SystemUsers } from "../../../js/user.js";
import { Validation } from "../../../js/validation.js";

// holding elements
let inputs = document.querySelectorAll(".sign-inputs input");
let loginBtn = document.querySelector(".sign-content button");
let validationSpan = document.querySelectorAll(".validation-error")[0];
let rememberCheck = document.getElementById("remember-check");
loginBtn.addEventListener("click", () => {
  let email = inputs[0].value;
  let password = inputs[1].value;
  if (
    Validation.validateEmail(email) &&
    Validation.validatePassword(password)
  ) {
    if (Validation.existEmail(email)) {
      let user = SystemUsers.getUser(email);
      if (user.password === password) {
        if (rememberCheck.checked)
          CookieHandler.addCookie("user", JSON.stringify(user), 30);
        window.sessionStorage.setItem("c-user", JSON.stringify(user));
        window.location.replace("../../Features/home/home.html");
        StyleHelper.resetValidations(validationSpan);
      } else {
        StyleHelper.setValidation(
          validationSpan,
          "incorrect email or password"
        );
      }
    } else {
      StyleHelper.setValidation(validationSpan, "Incorrect email or password");
    }
  } else {
    StyleHelper.setValidation(
      validationSpan,
      "Please fill fields with valid data"
    );
  }
});
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", () => {
    StyleHelper.resetValidations(validationSpan);
  });
}
