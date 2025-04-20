export class StyleHelper {
  static addClass(element, className) {
    element.classList.add(className);
  }

  static removeClass(element, className) {
    element.classList.remove(className);
  }

  static toggleClass(element, className) {
    element.classList.toggle(className);
  }

  static resetValidations(elements) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("validation-disabled");
    }
  }
  static setValidations(elements) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("validation-disabled");
    }
  }
  static resetValidation(element) {
    element.classList.add("validation-disabled");
  }
  static setValidation(element, message) {
    if (message) {
      element.textContent = message;
    }
    element.classList.remove("validation-disabled");
  }
}
