export class CookieHandler {
  static addCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }
  static getCookie(name) {
    let nameEQ = name + "=";
    let arrCookies = document.cookie.split(";");
    for (let i = 0; i < arrCookies.length; i++) {
      let cookie = arrCookies[i];
      while (cookie.charAt(0) == " ")
        cookie = cookie.substring(1, cookie.length);
      if (cookie.indexOf(nameEQ) == 0)
        return cookie.substring(nameEQ.length, cookie.length);
    }
    return null;
  }
  static deleteCookie(name) {
    CookieHandler.addCookie(name, "", -1);
  }
}
