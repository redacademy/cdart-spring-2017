import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { homeForms } from '../../assets/data';

import PictureList from '../../components/PictureList';

class FormsContainer extends Component {

  render() {
    return(
      <PictureList list={ homeForms } />
    );
  }
}

FormsContainer.propTypes = {
  list: PropTypes.array
}

export default FormsContainer;
