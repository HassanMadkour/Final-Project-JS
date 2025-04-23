import { SystemUsers } from "./user.js";

export class Validation {
  static validateEmail(email) {
    const re = /^[^\s@$]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/;
    return re.test(String(email).toLowerCase());
  }

  static validatePassword(password) {
    const re = /^[a-zA-Z0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{8,}$/;
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const upperCase = /[A-Z]/;
    const number = /[0-9]/;

    return (
      re.test(String(password)) &&
      specialChars.test(String(password)) &&
      upperCase.test(String(password)) &&
      number.test(String(password))
    );
  }
  static validateRepeatPassword(password, repeatPassword) {
    return password === repeatPassword;
  }
  static validateAgreement(checkbox) {
    return checkbox.checked;
  }

  static validateName(name) {
    const re = /^[a-zA-Z ]{3,}$/;
    //only one space
    const space = /\s{2,}/;
    return re.test(String(name)) && !space.test(String(name));
  }
  static existEmail(email) {
    console.log(SystemUsers.users);
    for (let i = 0; i < SystemUsers.users.length; i++) {
      if (SystemUsers.users[i].email.toLowerCase() === email.toLowerCase()) {
        return true;
      }
    }
    return false;
  }
}
