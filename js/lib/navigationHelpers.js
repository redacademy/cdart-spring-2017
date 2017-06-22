import { NavigationActions } from '@expo/ex-navigation';
import { Platform } from 'react-native';
import Store from '../redux/store';
import Router from '../navigation/router';

export const goToView = (currentNavigatorUID, routeName, tabName, isTabNav, navigation) => {
  if( isTabNav ) {
    Platform.OS === 'ios' ?
    navigation.performAction(({ tabs }) => {
      tabs( 'main' ).jumpToTab( tabName );
    }):
    navigation.performAction(({ drawer }) => {
      drawer('main').jumpToItem(tabName);
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

export const goToSubpage = (targetRoute, currentNavigatorUID, data) => {
  Store.dispatch( NavigationActions.push(
    currentNavigatorUID,
    Router.getRoute(targetRoute, { data })
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

export const goToCameraRollView = () => {
  console.log('hi from camera roll view nav helper');
  Store.dispatch(NavigationActions.push(
    'root',
    Router.getRoute('cameraRollView')
  ));
}

export const exitCameraRollView = () => {
  console.log('bye from exit camera roll view nav helper');
  Store.dispatch(NavigationActions.pop(
    'root',
    Router.getRoute('cameraRollView')
  ));
}
