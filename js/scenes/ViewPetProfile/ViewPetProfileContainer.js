import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import ViewProfile from './ViewPetProfile.js';

class ViewProfileContainer extends Component {

  static route = {
    navigationBar: {
      title: 'View Profile'
    }
  }

  componentDidMount() {
    console.log('Mounting with data:', this.props.data);
  }

  render() {
    return(
      <ViewProfile petInfo={ this.props.data } />
    );
  }
}

ViewProfileContainer.propTypes = {
  data: PropTypes.object
}

export default ViewProfileContainer;
