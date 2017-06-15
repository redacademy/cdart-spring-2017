import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { checkLists } from '../../assets/data'

import PictureList from '../../components/PictureList';

class ChecklistsContainer extends Component {

  render() {
    return (
      <PictureList list={ checkLists }/>
    );
  }
}

ChecklistsContainer.propTypes = {
  list: PropTypes.array
}

export default ChecklistsContainer;
