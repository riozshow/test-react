//actions
const createActionName = (actionName) => `app/searchPhrase/${actionName}`;
const SET_SEARCH_PHRASE = createActionName("SET_PHRASE");

//action creators
export const setSearchPhrase = (payload) => ({
  type: SET_SEARCH_PHRASE,
  payload,
});

const searchPhraseReducer = (statePart = "", action) => {
  switch (action.type) {
    case SET_SEARCH_PHRASE:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchPhraseReducer;
