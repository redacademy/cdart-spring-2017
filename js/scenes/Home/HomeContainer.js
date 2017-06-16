import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {styles} from './styles';

import {
  View
} from 'react-native';

import Home from './Home';

class HomeContainer extends Component {

  render() {
    return(
      <View style={styles.container}>
        <Home navigation={ this.props.navigation }/>
      </View>
    );
  }
}

export default HomeContainer;
