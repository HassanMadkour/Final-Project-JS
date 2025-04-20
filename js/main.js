import { CookieHandler } from "./cookie_handler.js";
window.onload = () => {
  let user = CookieHandler.getCookie("user");
  if (user) {
    window.location.replace("../Features/home/home.html");
  } else {
    window.location.replace("../Features/auth/login.html");
  }
};
