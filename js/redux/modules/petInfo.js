export const ADD_TEMPERMENT_INFO = 'ADD_TEMPERMENT_INFO';
export const ADD_GENDER_INFO = 'ADD_GENDER_INFO';
export const ADD_SPAYED = 'ADD_SPAYED';
export const SET_PET_PROFILE_IMAGE_URI = 'SET_PET_PROFILE_IMAGE_URI';

export const addTemperment = (info) => ({ type: ADD_TEMPERMENT_INFO, payload: info });
export const addGender = (info) => ({ type: ADD_GENDER_INFO, payload: info });
export const addSpayed = (info) => ({ type: ADD_SPAYED, payload: info });
export const setPetProfileImageUri = (uri) => ({ type: SET_PET_PROFILE_IMAGE_URI, payload: uri });

export function reducer(state = {
    temperments: [],
    gender: '',
    spayed: undefined,
    selectedImage: ''
}, action) {
    switch (action.type) {
    case ADD_TEMPERMENT_INFO:{
        return Object.assign({}, state, {
            temperments: [...state.temperments, action.payload]
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
    default:
        return state;
    }
}
