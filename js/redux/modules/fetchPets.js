const GET_PETS_LOADING = 'GET_PETS_LOADING';
const GET_PETS_ERROR = 'GET_PETS_ERROR';
const GET_PETS = 'GET_PETS';

import { queryPetProfiles } from '../../config/models';

const getPetsLoading = () => ({ type: GET_PETS_LOADING });
const getPetsError = () => ({ type: GET_PETS_ERROR, payload: 'Error querying the database' });
const getPets = ( petProfiles ) => ({ type: GET_PETS, payload: petProfiles });

export const _fetchPets = () => (dispatch) => {
  dispatch( getPetsLoading() );
  const petProfiles = queryPetProfiles();
  petProfiles === undefined || null ?
    dispatch( getPetsError() ) :
    dispatch( getPets( petProfiles ) );
  return petProfiles;
}

export default function reducer( state = {
  isLoading: false,
  petProfiles: [],
  error: ''
}, action) {
  switch ( action.type ) {
    case GET_PETS_LOADING: {
      return Object.assign({}, state, {
        isLoading: true
      });
    }
    case GET_PETS_ERROR: {
      return Object.assign({}, state, {
        error: action.payload,
        isLoading: false
      });
    }
    case GET_PETS: {
      return Object.assign({}, state, {
        isLoading: false,
        petProfiles: action.payload,
        error: ''
      });
    }
    default: {
      return state;
    }
  }
}
