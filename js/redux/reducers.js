import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import petReducer from './modules/otherInputs';

import { NavigationReducer } from '@expo/ex-navigation';

export default combineReducers({
  navigation: NavigationReducer,
  petProfile
});

const petProfile = combineReducers({
  reduxForm: formReducer,
  otherInputs:  petReducer
})