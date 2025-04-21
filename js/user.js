import { CookieHandler } from "./cookie_handler.js";

export class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  toString() {
    return `${this.name} ${this.email} ${this.password}`.trim();
  }
}

export class SystemUsers {
  static #users = [];

  static {
    const cookie = CookieHandler.getCookie("users");
    if (cookie) {
      try {
        const users = JSON.parse(cookie);
        if (Array.isArray(users)) {
          SystemUsers.#users = users;
        }
      } catch (e) {
        console.error("Invalid users cookie:", e);
      }
    }
  }

  static add(user) {
    SystemUsers.#users.push(user);
    CookieHandler.addCookie("users", JSON.stringify(SystemUsers.#users), 2000);
  }

  static get users() {
    return SystemUsers.#users;
  }

  static getUser(email) {
    return SystemUsers.#users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
  }

  static clearUsers() {
    SystemUsers.#users = [];
    CookieHandler.deleteCookie("users");
  }
}

export class CurrentUser {
  static #user = null;

  static {
    let cookie = window.sessionStorage.getItem("c-user");
    if (cookie) {
      CurrentUser.#user = JSON.parse(cookie);
    } else {
      cookie = CookieHandler.getCookie("user");
      if (cookie) {
        CurrentUser.#user = JSON.parse(cookie);
      }
    }
  }
  static get user() {
    return CurrentUser.#user;
  }
  static set user(user) {
    CurrentUser.#user = user;
  }
}
