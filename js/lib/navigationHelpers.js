import { NavigationActions } from '@expo/ex-navigation';
import Store from '../redux/store';
import Router from '../navigation/router';

export const goToView = (currentNavigatorUID, routeName, tabName, isTabNav, navigation) => {
  if( isTabNav ) {
    navigation.performAction(({ tabs, stacks }) => {
      tabs( 'main' ).jumpToTab( tabName );
    });
  } else {
    Store.dispatch( NavigationActions.push(
      currentNavigatorUID,
      Router.getRoute( routeName )
    ));
  }
}

export const clearNavStack = () => {
  Store.dispatch( NavigationActions.pop(
    'home'
  ));
}

export const goToInfoPage = (currentNavigatorUID, infoData) => {
  Store.dispatch(NavigationActions.push(
    currentNavigatorUID,
    Router.getRoute('getInvolvedInfo', { infoData })
  ));
}

export const goToCheckListPage = (currentNavigatorUID, infoData) => {
  Store.dispatch(NavigationActions.push(
    currentNavigatorUID,
    Router.getRoute('checklistsPage', { infoData })
  ));
}

export const goToApp = () => {
  Store.dispatch(NavigationActions.push(
    "root",
    Router.getRoute('navigation')
  ));
}

export const goToNewProfile = (currentNavigatorUID) => {
  console.log('hi from nav helper');
  Store.dispatch(NavigationActions.push(
    currentNavigatorUID,
    Router.getRoute('newProfile')
  ));
}