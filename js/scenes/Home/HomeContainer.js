import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {styles} from './styles';

import { connect } from 'react-redux';

import { _fetchPets } from '../../redux/modules/fetchPets';

import {
  View,
  Text
} from 'react-native';

import Home from './Home';

class HomeContainer extends Component {

  componentDidMount() {
    this.props.fetchPets();

    console.log(this.props.navigation);
  }

  render() {
    return(
      <View style={styles.container}>
        <Home navigation={ this.props.navigation }/>


      </View>
    );
  }
}

function mapStateToProps( state ) {
  return {
   petProfiles: state.petProfile
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    fetchPets() {
      dispatch( _fetchPets() )
    }
  }
}

HomeContainer.propTypes = {
  fetchPets: PropTypes.func,

}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
