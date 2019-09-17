/*
 here we need a functions to gets two properties 
(stateObject = represents Initial Or last state) and then receives an action = object that 
has a type of action
*/

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER  ":
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
