import React, { Component } from 'react';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';
import LinearGradient from 'react-native-linear-gradient';

import Router from './router';
import { Text, Image, StyleSheet } from 'react-native';
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
        colors={gradients.redTabGradient}
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

  renderIcon(iconName, isSelected) {
    const whichIcon = (icon, isSelected) => {
      switch(icon){
        case "home":
          return isSelected ? require('../assets/icons/red_home_icon.png'): require('../assets/icons/outline_home_icon.png') ;
        case "petProfile":
          return isSelected ? require('../assets/icons/paw_icon.png'): require('../assets/icons/pet_profile_icon.png') ;
        case "updates":
          return isSelected ? require('../assets/icons/red_updates_icon.png'): require('../assets/icons/updates_icon.png') ;
        case "getInvolved":
          return isSelected ? require('../assets/icons/red_involved_icon.png'): require('../assets/icons/outline_involved_icon.png') ;
        default:
          return ;
      }
    }
    return <Image
            source={whichIcon(iconName, isSelected)}
            style={{width: 30, height: 30, resizeMode: 'contain'}}
          />
  }

  renderTitle(isSelected, title) {
    const titleStyle = {
      color: isSelected ? colors.red : colors.grey,
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
          renderIcon={isSelected => this.renderIcon("home", isSelected)}
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
          renderIcon={isSelected => this.renderIcon("petProfile", isSelected)}
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
          renderIcon={isSelected => this.renderIcon("updates", isSelected)}
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
          renderIcon={isSelected => this.renderIcon("getInvolved", isSelected)}
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
