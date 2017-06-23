export const ADD_TEMPERAMENT_INFO = 'ADD_TEMPERAMENT_INFO';
export const ADD_GENDER_INFO = 'ADD_GENDER_INFO';
export const ADD_SPAYED = 'ADD_SPAYED';

export const addTemperament = (info) => ({ type: ADD_TEMPERAMENT_INFO, payload: info });
export const addGender = (info) => ({ type: ADD_GENDER_INFO, payload: info });
export const addSpayed = (info) => ({ type: ADD_SPAYED, payload: info });

export function reducer(state = {
    temperaments: []
}, action) {
    switch (action.type) {
    case ADD_TEMPERAMENT_INFO:{
        return Object.assign({}, state, {
            temperaments: [...state.temperaments, action.payload]
        })
    }
    case ADD_GENDER_INFO:{
        return Object.assign({}, state, {
            gender: action.payload
        })
    }
    case ADD_SPAYED: {
        return Object.assign({}, state, {
            spayed: action.payload
        })
    }
    default:
        return state;
    }
}
