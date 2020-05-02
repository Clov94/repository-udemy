/*
 here we need a functions to gets two properties 
(stateObject = represents Initial Or last state) and then receives an action = object that 
has a type of action
*/

const INITIAL_STATE = {
  currentUser: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
  if (action.type) {
    return {
      ...state,
      currentUser: action.payload,
    }
  }

  return state
}

export default userReducer
