import View from "./View";
import "regenerator-runtime/runtime";
import "core-js/stable";


class QuoteOfTheDay extends View {
  _parentEl = document.querySelector(".section--2");
  _subEl = document.querySelector(".author-container");

  _generateMarkUp() {
    return `
    <p class="small">Quote of the day</p>
    <p class="quote">
      ${this._data}
    </p>
        `;
  }

  addHandlerRenderer(handler) {
    window.addEventListener("load", (e) => {
      const colors = ["#9AD2CB", "#668E29", "#DA6868", "#9B791C", "#341D28"];
      const random = Math.floor(Math.random() * colors.length);

      document.querySelector(".header").style.backgroundColor = colors[random];
      handler();
    });
  }
}

export default new QuoteOfTheDay();
