import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Text } from 'react-native';
import { connect } from 'react-redux';

import { clearNavStack } from '../../lib/navigationHelpers';

import { _fetchPets } from '../../redux/modules/fetchPets';

import PetProfile from './PetProfile';

class PetProfileContainer extends Component {
  constructor(props){
    super(props);
  }
  static route = {
    navigationBar: {
      title: 'Pet Profile',
    }
  }

  componentDidMount() {
    this.props.fetchPets();
  }

  componentWillUpdate() {
    clearNavStack();
  }

  render() {
    return (
      <PetProfile
        createProfile={this.createProfile}
        myPets={this.props.pets}
        currentNavigatorUID="petProfile" />
    );
  }
}

function mapStateToProps( state ) {
  return {
   pets: state.pets
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    fetchPets() {
      dispatch( _fetchPets() )
    }
  }
}

PetProfileContainer.propTypes = {
  fetchPets: PropTypes.func,
  pets: PropTypes.object,
  navigation: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(PetProfileContainer);
