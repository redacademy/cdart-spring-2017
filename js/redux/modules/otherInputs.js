export const ADD_BUTTON_INFO = 'ADD_BUTTON_INFO';

export const addButtonInfo = (info) => ({ type: ADD_BUTTON_INFO, payload: info });

export function reducer(state = [], action) {
    switch (action.type) {
    case ADD_BUTTON_INFO:
        return [...state, action.payload]
    default:
        return state;
    }
}