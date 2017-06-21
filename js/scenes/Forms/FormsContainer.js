import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { homeForms } from '../../assets/data';

import PictureList from '../../components/PictureList';

const targetRoute = 'singleForm';
const currentNavigatorUID = 'home'

class FormsContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Forms'
    }
  }

  render() {
    return(
      <PictureList
        list={ homeForms }
        title='forms'
        currentNavigatorUID={ currentNavigatorUID }
      />
    );
  }
}

FormsContainer.propTypes = {
  list: PropTypes.array
}

export default FormsContainer;
