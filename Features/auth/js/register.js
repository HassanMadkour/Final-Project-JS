import { SystemUsers, User } from "../../../js/user.js";
import { Validation } from "../../../js/validation.js";
import { StyleHelper } from "../../../js/style.js";
// holding elements
let inputs = document.querySelectorAll(".sign-inputs input");
let agreeCheck = document.getElementById("agree-check");
let registerBtn = document.querySelector(".sign-content button");
let validationSpans = document.querySelectorAll(".validation-error");
registerBtn.addEventListener("click", () => {
  let name = inputs[0].value;
  let email = inputs[1].value;
  let password = inputs[2].value;
  let repeatPassword = inputs[3].value;
  if (
    Validation.validateEmail(email) &&
    Validation.validatePassword(password) &&
    Validation.validateRepeatPassword(password, repeatPassword) &&
    Validation.validateName(name) &&
    !Validation.existEmail(email) &&
    Validation.validateAgreement(agreeCheck)
  ) {
    let user = new User(name, email, password);
    SystemUsers.add(user);
    window.location.assign("../../Features/auth/login.html");
  } else {
    validateInputs(email, password, repeatPassword, name);
  }
});
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", () => {
    StyleHelper.resetValidation(validationSpans[i]);
  });
}
agreeCheck.addEventListener("change", () => {
  StyleHelper.resetValidation(validationSpans[4]);
});
function validateInputs(email, password, repeatPassword, name) {
  if (!Validation.validateEmail(email)) {
    StyleHelper.setValidation(validationSpans[1], "invalid email");
  }
  if (!Validation.validatePassword(password)) {
    StyleHelper.setValidation(
      validationSpans[2],
      "weak password (upper-case, number, special char)"
    );
  }
  if (!Validation.validateRepeatPassword(password, repeatPassword)) {
    StyleHelper.setValidation(validationSpans[3], "passwords do not match");
  }
  if (!Validation.validateName(name)) {
    StyleHelper.setValidation(validationSpans[0], "invalid name");
  }
  if (!Validation.validateAgreement(agreeCheck)) {
    StyleHelper.setValidation(validationSpans[4], "you must agree the terms");
  }
  if (Validation.existEmail(email)) {
    StyleHelper.setValidation(validationSpans[1], "email already exist");
  }
}
