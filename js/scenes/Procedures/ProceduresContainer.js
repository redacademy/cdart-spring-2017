import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { procedureList } from '../../assets/data';

import PictureList from '../../components/PictureList';

const targetRoute = 'singleIncident';
const currentNavigatorUID = 'home';
class ProceduresContainer extends Component {

  render() {
    return(
      <PictureList targetRoute={targetRoute} currentNavigatorUID={ currentNavigatorUID } list={ procedureList } />
    );
  }
}

ProceduresContainer.propTypes = {
  list: PropTypes.array
}

export default ProceduresContainer;
