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

export const goToTab = (targetTab, targetRoute) => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs( 'main' ).jumpToTab( targetTab );
      stacks( 'home' ).push( Router.getRoute( targetRoute ));
    });
}

export const goToInfoPage = (currentNavigatorUID, infoData) => {
  Store.dispatch(NavigationActions.push(
    currentNavigatorUID,
    Router.getRoute('getInvolvedInfo', { infoData })
  ));
}
