export const ADD_BUTTON_INFO = 'ADD_BUTTON_INFO';

export const addButtonInfo = (info) => ({ type: ADD_BUTTON_INFO, payload: info });

export default function petReducer (state, action){
  switch (action.type) {
    case ADD_BUTTON_INFO: {
      return {...action.payload}
    }
    default: {
      return state
    }
  }
}