import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { procedureList } from '../../assets/data';

import PictureList from '../../components/PictureList';

const currentNavigatorUID = 'home';
class ProceduresContainer extends Component {

  render() {
    return(
      <PictureList title='procedures' currentNavigatorUID={ currentNavigatorUID } list={ procedureList } />
    );
  }
}

ProceduresContainer.propTypes = {
  list: PropTypes.array
}

export default ProceduresContainer;
