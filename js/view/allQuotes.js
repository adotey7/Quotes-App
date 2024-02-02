import "regenerator-runtime/runtime";
import "core-js/stable";

import View from "./View";

class allQuotes extends View {
  _parentEl = document.querySelector(".main-body");

  addHandlerRenderer(handler) {
    window.addEventListener("load", handler);
  }
  _generateMarkUp() {
    return this._data.map((quote) => {
      const colors = ["#9AD2CB", "#668E29", "#DA6868", "#9B791C", "#341D28"];
      const random = Math.floor(Math.random() * colors.length);

      const randomColor = colors[random];

      return `
      <div class="quote-container" style="background-color: ${randomColor};">
        <p>${quote.quote}</p>
        <p class="author"> - ${quote.author}</p>
      </div>`;
    });
  }
}

export default new allQuotes();
