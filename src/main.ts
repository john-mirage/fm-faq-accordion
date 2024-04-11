import "./main.css";

import DisclosureButton from "./scripts/disclosure-button";

window.addEventListener(
  "load",
  function () {
    const buttons = document.querySelectorAll("[data-disclosure-button]");

    buttons.forEach((button) => {
      if (button instanceof HTMLButtonElement) {
        new DisclosureButton(button);
      }
    });
  },
  false
);
