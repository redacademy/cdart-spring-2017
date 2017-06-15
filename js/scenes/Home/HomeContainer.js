import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View
} from 'react-native';

import Home from './Home';

class HomeContainer extends Component {

  render() {
    return(
      <View>
        <Home navigation={ this.props.navigation }/>
      </View>
    );
  }
}

export default HomeContainer;
