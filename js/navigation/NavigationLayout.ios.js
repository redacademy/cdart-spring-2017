import React, { Component } from 'react';

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';

import Router from './router';

import { Text } from 'react-native';

const defaultRouteConfig = {
  navigationBar: {
    tintColor: 'white',
    titleStyle: {
      fontFamily: 'Arial'
    },
    backgroundColor: 'red'
    /*renderBackground: () =>
      <LinearGradient
        style={styles.linearGradient}
        colors={[colors.purple, colors.red]}
        start={{x: 0.25, y: 1}}
        end={{x: 1, y: 0.25}}
      />*/
  }
}

class NavigationLayout extends Component {

 static route = {
    navigationBar: {
      visible: false,
    }
  }

  // renderIcon(iconName, isSelected) {
  //   return <Icon name={iconName} size={24} color={isSelected ? 'red' : 'gray'} />
  // }

  renderTitle(isSelected, title) {
    const titleStyle = {
      color: isSelected ? 'red' : 'gray',
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
        initialTab="updates"
        tabBarColor="white">

        {/*<TabItem
          id="home"
          title="Home"
          //renderIcon={isSelected => this.renderIcon('ios-calendar', isSelected)}
          //renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="home"
            navigatorUID="home"
            initialRoute={Router.getRoute('home')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>*/}

        <TabItem
          id="petProfile"
          title="Pet Profile"
          //renderIcon={isSelected => this.renderIcon('ios-heart', isSelected)}
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
          //renderIcon={isSelected => this.renderIcon('ios-heart', isSelected)}
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
          //renderIcon={isSelected => this.renderIcon('ios-heart', isSelected)}
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