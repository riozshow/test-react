import { createStore } from "redux";
import { initialState } from "./initialState";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_COLUMN":
      return { ...state, columns: [...state.columns, action.payload] };
    case "ADD_CARD":
      return { ...state, cards: [...state.cards, action.payload] };
    case "SET_SEARCH_PHRASE":
      return { ...state, searchPhrase: action.payload };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//selectors

export const getFilteredCards = (state, columnId) => {
  const { cards, searchPhrase } = state;
  return cards.filter(
    (card) => card.columnId === columnId && card.title.strContains(searchPhrase)
  );
};

export const getAllColumns = (state) => state.columns;

// action creators
export const addColumn = (payload) => ({ type: "ADD_COLUMN", payload });
export const addCard = (payload) => ({ type: "ADD_CARD", payload });
export const setSearchPhrase = (payload) => ({
  type: "SET_SEARCH_PHRASE",
  payload,
});

export default store;
