import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as petReducer } from './modules/petInfo';
import petProfilesReducer from './modules/fetchPets';
import { getFormValues } from 'redux-form';
import UpdatesReducer from './modules/updates';

import { NavigationReducer } from '@expo/ex-navigation';

export default combineReducers({
  navigation: NavigationReducer,
  updates: UpdatesReducer,
  petProfile: combineReducers({
    form: formReducer,
    toggleInputs:  petReducer,
  }),
  pets: petProfilesReducer
});
