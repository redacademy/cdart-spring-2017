import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {styles} from './styles';

import {
  View,
  Text
} from 'react-native';

import Home from './Home';

class HomeContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Home'
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Home navigation={ this.props.navigation }/>
      </View>
    );
  }
}

HomeContainer.propTypes = {
  navigation: PropTypes.object
}

export default HomeContainer;
