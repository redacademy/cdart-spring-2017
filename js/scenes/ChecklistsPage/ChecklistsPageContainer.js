import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import CheckListTemplate from '../../components/CheckListTemplate/';

class ChecklistsPageContainer extends Component {
  render() {
    return (
      <CheckListTemplate data={this.props.data}/>
    );
  }
}

ChecklistsPageContainer.propTypes = {
  data: PropTypes.object
}

export default ChecklistsPageContainer;
