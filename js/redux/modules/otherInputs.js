export const ADD_BUTTON_INFO = 'ADD_BUTTON_INFO';
export const ADD_GENDER_INFO = 'ADD_GENDER_INFO';

export const addButtonInfo = (info) => ({ type: ADD_BUTTON_INFO, payload: info });
export const addGenderInfo = (info) => ({ type: ADD_GENDER_INFO, payload: info });

export function reducer(state = [], action) {
    switch (action.type) {
    case ADD_BUTTON_INFO:
        return [...state, action.payload]
    case ADD_GENDER_INFO:
        if(state.includes('male')){
            state.filter(item => item === 'male')
        } else if(state.includes('female')){
            state.filter(item => item === 'female')
        }
        return [...state, action.payload]
    default:
        return state;
    }
}
