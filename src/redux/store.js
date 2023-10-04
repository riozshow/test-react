import { createStore } from "redux";
import { initialState } from "./initialState";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return { ...state, lists: [...state.lists, action.payload] };
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
  return cards.filter((card) => card.columnId === columnId && card.title.strContains(searchPhrase));
};

export const getListById = (state, id) => state.lists.find((list) => list.id == id);

export const getAllLists = (state) => state.lists;

export const getAllColumns = (state) => state.columns;

export const getColumnsByList = (state, id) => state.columns.filter((column) => column.listId == id);

// action creators
export const addList = (payload) => ({ type: "ADD_LIST", payload });
export const addColumn = (payload) => ({ type: "ADD_COLUMN", payload });
export const addCard = (payload) => ({ type: "ADD_CARD", payload });
export const setSearchPhrase = (payload) => ({
  type: "SET_SEARCH_PHRASE",
  payload,
});

export default store;
