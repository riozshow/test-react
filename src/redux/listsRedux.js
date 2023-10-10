import shortid from "shortid";

//selectors
export const getListById = (state, id) => state.lists.find((list) => list.id == id);
export const getAllLists = (state) => state.lists;

//actions
const createActionName = (actionName) => `app/lists/${actionName}`;
const ADD_LIST = createActionName("ADD_LIST");

//action creators
export const addList = (payload) => ({ type: ADD_LIST, payload });

const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default listsReducer;
