import React, { Component } from 'react';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';
import LinearGradient from 'react-native-linear-gradient';

import Router from './router';
import { Text, StyleSheet } from 'react-native';
import { colors, typography, gradients } from '../config/styles';

const defaultRouteConfig = {
  navigationBar: {
    tintColor: colors.white,
    titleStyle: {
      fontFamily: 'Arial',
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

  renderTitle(isSelected, title) {
    const titleStyle = {
      color: isSelected ? colors.red : colors.lightGrey,
      fontSize: 12,
      fontFamily: 'Arial'
    };
    return <Text style={titleStyle}>{title}</Text>
  }

  render() {
    return(
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="home"
        tabBarColor="white">

        <TabItem
          id="home"
          title="Home"
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="home"
            navigatorUID="home"
            initialRoute={Router.getRoute('home')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="petProfile"
          title="Pet Profile"
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="petProfile"
            navigatorUID="petProfile"
            initialRoute={Router.getRoute('petProfile')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="updates"
          title="Updates"
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="updates"
            navigatorUID="updates"
            initialRoute={Router.getRoute('updates')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="getInvolved"
          title="Get Involved"
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="getInvolved"
            navigatorUID="getInvolved"
            initialRoute={Router.getRoute('getInvolved')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

      </TabNavigation>
    );
  }
}

export default NavigationLayout;
