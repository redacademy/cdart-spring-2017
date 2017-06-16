import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Text } from 'react-native'
import { checkLists } from '../../assets/data'

import PictureList from '../../components/PictureList';
import CheckListTemplate from '../../components/CheckListTemplate/';

class ChecklistsPageContainer extends Component {
  render() {
    return (
      <CheckListTemplate infoData={this.props.infoData}/>
    );
  }
}

ChecklistsPageContainer.propTypes = {
  list: PropTypes.array
}

export default ChecklistsPageContainer;
