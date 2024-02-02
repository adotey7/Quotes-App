export default class View {
  _data;
  _author;
  _errorMessage =
    "Something went wrong... reload the page after a few seconds.";

  _generateAuthor(author) {
    return `
    <p> - <span class="author">${author}</span></p>
    `;
  }
  render(data, author) {
    if (!data || (Array.isArray(data) && data.length <= 1)) throw new Error();

    this._data = data;
    this._author = author;

    if (Array.isArray(data)) {
      const markup = this._generateMarkUp();
      // const authorMarkup = this._generateAuthor();

      this._parentEl.innerHTML = "";

      this._parentEl.insertAdjacentHTML("afterbegin", markup);
    } else {
      const markup = this._generateMarkUp();
      const authorMarkup = this._generateAuthor(this._author);

      this._clear();
      this._parentEl.insertAdjacentHTML("beforeend", markup);
      this._subEl.insertAdjacentHTML("beforeend", authorMarkup);
    }
  }

  renderError() {
    const markup = `
    <p class="error">${this._errorMessage}</p>
    `;

    this._parentEl.innerHTML = "";

    this._parentEl.insertAdjacentHTML("beforeend", markup);
  }

  renderSpinner() {
    const markup = `
    <div class="spinner">
      <div class="loader"></div>
    </div>
    `;

    this._parentEl.innerHTML = "";

    this._parentEl.insertAdjacentHTML("beforeend", markup);
  }
  _clear() {
    this._parentEl.innerHTML = "";
    this._subEl.innerHTML = "";
  }
}
