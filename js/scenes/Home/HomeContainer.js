import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
  View
} from 'react-native';

class HomeContainer extends Component {

  render() {
    return(
      <View>
        <HomeScreen />
      </View>
    );
  }
}

export default HomeContainer;
