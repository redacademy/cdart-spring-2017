import React, { Component } from 'react';
import { colors, typography, gradients } from '../config/styles';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';
import { Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import Router from './router';

const defaultRouteConfig = {
  navigationBar: {
    tintColor: colors.white,
    titleStyle: {
      fontFamily: 'Arial',
      color: colors.white,
      fontSize: typography.baseSize
    },
    renderBackground: () =>
    <LinearGradient
      style={navStyles.linearGradient}
      colors={gradients.redGradient}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
    />
  }
}

const navStyles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  }
});

class NavigationLayout extends Component {

  static route = {
    navigationBar: {
      visible: false,
    }
  }

  renderTitle(title, isSelected) {
    const titleStyle = {
      color: isSelected ? colors.red : colors.lightGrey,
      fontSize: 12,
      fontFamily: 'Arial'
    };
    return <Text style={titleStyle}>{title}</Text>
  }

  render() {
    return (
      <DrawerNavigation
        drawerWidth={300}
        id="main"
        navigatorUID="main"
        initialItem="home">
        <DrawerNavigationItem
          id="home"
          title="Home"
          // renderIcon={isSelected => this.renderIcon('ios-calendar', isSelected)}
          renderTitle={(isSelected) => this.renderTitle('Home', isSelected)}
        >
          <StackNavigation
            id="home"
            navigatorUID="home"
            initialRoute={Router.getRoute('home')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="petProfile"
          title="Pet Profile"
          // renderIcon={isSelected => this.renderIcon('ios-calendar', isSelected)}
          renderTitle={(isSelected) => this.renderTitle('Pet Profile', isSelected)}
        >
          <StackNavigation
            id="petProfile"
            navigatorUID="petProfile"
            initialRoute={Router.getRoute('petProfile')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="updates"
          title="Updates"
          // renderIcon={isSelected => this.renderIcon('ios-calendar', isSelected)}
          renderTitle={(isSelected) => this.renderTitle('Updates', isSelected)}
        >
          <StackNavigation
            id="updates"
            navigatorUID="updates"
            initialRoute={Router.getRoute('updates')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="getInvolved"
          title="Get Involved"
          // renderIcon={isSelected => this.renderIcon('ios-calendar', isSelected)}
          renderTitle={(isSelected) => this.renderTitle('Get Involved', isSelected)}
        >
          <StackNavigation
            id="getInvolved"
            navigatorUID="getInvolved"
            initialRoute={Router.getRoute('getInvolved')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }
}

export default NavigationLayout;
