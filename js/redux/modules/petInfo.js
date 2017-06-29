export const ADD_TEMPERAMENT_INFO = 'ADD_TEMPERAMENT_INFO';
export const ADD_GENDER_INFO = 'ADD_GENDER_INFO';
export const ADD_SPAYED = 'ADD_SPAYED';
export const SET_PET_PROFILE_IMAGE_URI = 'SET_PET_PROFILE_IMAGE_URI';
export const REMOVE_SPAYED = 'REMOVE_SPAYED';
export const REMOVE_TEMPERAMENT_INFO = 'REMOVE_TEMPERAMENT_INFO';

export const addTemperament = (info) => ({ type: ADD_TEMPERAMENT_INFO, payload: info });
export const removeTemperament = (info) => ({ type: REMOVE_TEMPERAMENT_INFO, payload: info });
export const addGender = (info) => ({ type: ADD_GENDER_INFO, payload: info });
export const addSpayed = (info) => ({ type: ADD_SPAYED, payload: info });
export const removeSpayed = (info) => ({ type: REMOVE_SPAYED, payload: info })
export const setPetProfileImageUri = (uri) => ({ type: SET_PET_PROFILE_IMAGE_URI, payload: uri });

export function reducer(state = {
    temperaments: [],
    gender: '',
    spayed: undefined,
    selectedImage: ''
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
    case SET_PET_PROFILE_IMAGE_URI: {
        return Object.assign({}, state, {
            selectedImage: action.payload
        })
    }
    case REMOVE_TEMPERAMENT_INFO:{
        return Object.assign({}, state, {
            temperaments: [...state.temperaments, action.payload]
        })
    }
    case REMOVE_SPAYED:{
        return Object.assign({}, state, {
            spayed: action.payload
        })
    }
    default:
        return state;
    }
}
