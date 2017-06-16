import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Text } from 'react-native'
import { checkLists } from '../../assets/data'

import PictureList from '../../components/PictureList';
<<<<<<< HEAD
import CheckListTemplate from '../../components/CheckListTemplate/';

class ChecklistsPageContainer extends Component {
  render() {
    return (
      <CheckListTemplate infoData={this.props.data}/>
=======

class ChecklistsPageContainer extends Component {

  render() {
    console.log('THIS IS A PAGE CHECKER', this.props )
    return (
      // <PictureList currentNavigatorUID='home' list={ checkLists }/>
      <Text> YOU'RE ON THE RIGHT PAGE NOW HUE</Text>
>>>>>>> re-adjusting data.js for checklists
    );
  }
}

ChecklistsPageContainer.propTypes = {
  list: PropTypes.array
}

export default ChecklistsPageContainer;
