import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { procedureList } from '../../assets/data';

import PictureList from '../../components/PictureList';

class ProceduresContainer extends Component {

  render() {
    return(
      <PictureList list={ procedureList } />
    );
  }
}

ProceduresContainer.propTypes = {
  list: PropTypes.array
}

export default ProceduresContainer;
