import { NavigationActions } from '@expo/ex-navigation';
import Store from '../redux/store';
import Router from '../navigation/router';

export const goToView = (currentNavigatorUID, routeName) => {
  Store.dispatch( NavigationActions.push(
    currentNavigatorUID,
    Router.getRoute(routeName)
  ));
}

export const goToInfoPage = (currentNavigatorUID, infoData) => {
  Store.dispatch(NavigationActions.push(
    currentNavigatorUID,
    Router.getRoute('getInvolvedInfo', { infoData })
  ));
}
