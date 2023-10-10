import shortid from "shortid";

//selectors
export const getFavoriteCards = (state) => state.cards.filter((card) => card.isFavorite);
export const getFilteredCards = (state, columnId) => {
  const { cards, searchPhrase } = state;
  return cards.filter((card) => card.columnId === columnId && card.title.strContains(searchPhrase));
};

//actions
const createActionName = (actionName) => `app/cards/${actionName}`;
const ADD_CARD = createActionName("ADD_CARD");
const DELETE_CARD = createActionName("DELETE_CARD");
const TOGGLE_FAVORITE = createActionName("TOGGLE_FAVORITE");

//action creators
export const addCard = (payload) => ({ type: ADD_CARD, payload });
export const deleteCard = (payload) => ({ type: DELETE_CARD, payload });
export const toggleFavorite = (payload) => ({ type: TOGGLE_FAVORITE, payload });

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case DELETE_CARD:
      return [...statePart.filter((card) => card.id !== action.payload)];
    case TOGGLE_FAVORITE:
      return statePart.map((card) => (card.id === action.payload ? { ...card, isFavorite: !card.isFavorite } : card));
    default:
      return statePart;
  }
};

export default cardsReducer;
