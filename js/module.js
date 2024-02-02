import "regenerator-runtime/runtime";
import "core-js/stable";
import { API_URL, QUOTES, QUOTE_OF_THE_DAY } from "./configs";
import { fetchURL } from "./helpers";

export const state = {
  quote: {
    quote: "",
    author: "",
  },
  quotes: [],
};

const loadQuoteOfTheDay = async function () {
  try {
    const data = await fetchURL(`${API_URL}${QUOTE_OF_THE_DAY}`);

    return data;
  } catch (error) {
    throw error;
  }
};

const allQuotes = async function () {
  try {
    const data = await fetchURL(`${API_URL}${QUOTES}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const loadBothQuotes = async function () {
  try {
    let [today, quotes] = await Promise.all([loadQuoteOfTheDay(), allQuotes()]);

    // Manipulating the state variable: A function with a side effect
    state.quote = {
      quote: today[0].q,
      author: today[0].a,
    };

    state.quotes = quotes.map((quote) => {
      return {
        quote: quote.q,
        author: quote.a,
      };
    });
  } catch (error) {
   throw error;
  }
};
