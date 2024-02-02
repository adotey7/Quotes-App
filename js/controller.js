import "regenerator-runtime/runtime";
import "core-js/stable";

import * as module from "./module";
import quoteOfTheDayView from "./view/dayView.js";
import allQuotesView from "./view/allQuotes.js";

const fetchTodaysQuote = async function () {
  try {
    quoteOfTheDayView.renderSpinner();
    await module.loadBothQuotes();
    quoteOfTheDayView.render(
      module.state.quote.quote,
      module.state.quote.author
    );
  } catch (error) {
    quoteOfTheDayView.renderError();
  }
};

const fetchQuotesView = async function () {
  try {
    allQuotesView.renderSpinner();

    await module.loadBothQuotes();
    allQuotesView.render(module.state.quotes);
   
  } catch (error) {
    quoteOfTheDayView.renderError();
  }
};



const init = function () {
  quoteOfTheDayView.addHandlerRenderer(fetchTodaysQuote);
  allQuotesView.addHandlerRenderer(fetchQuotesView);
};

init();
