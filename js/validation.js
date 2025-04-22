import { SystemUsers } from "./user.js";

export class Validation {
  static validateEmail(email) {
    const re = /^[^\s@]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  static validatePassword(password) {
    const re = /^\w{8,}$/;
    return re.test(String(password));
  }
  static validateRepeatPassword(password, repeatPassword) {
    return password === repeatPassword;
  }
  static validateAgreement(checkbox) {
    return checkbox.checked;
  }

  static validateName(name) {
    const re = /^[a-zA-Z ]{3,}$/;
    return re.test(String(name));
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
