import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import CheckListTemplate from '../../components/CheckListTemplate/';

class ChecklistsPageContainer extends Component {

  static route = {
    navigationBar: {
      title(params) {
        return params.data.title
      }
    }
  }

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
