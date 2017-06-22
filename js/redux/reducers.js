import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as petReducer } from './modules/petInfo';
import { getFormValues } from 'redux-form';

import { NavigationReducer } from '@expo/ex-navigation';

export default combineReducers({
  navigation: NavigationReducer,
  petProfile: combineReducers({
    form: formReducer,
    toggleInputs:  petReducer,
  }),
});
