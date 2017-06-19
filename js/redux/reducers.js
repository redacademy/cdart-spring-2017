import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { NavigationReducer } from '@expo/ex-navigation';

export default combineReducers({
  navigation: NavigationReducer,
  form: formReducer,
});

