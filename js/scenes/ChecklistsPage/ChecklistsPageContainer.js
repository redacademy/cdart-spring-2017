import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Text } from 'react-native'
import { checkLists } from '../../assets/data'

import PictureList from '../../components/PictureList';
import CheckListTemplate from '../../components/CheckListTemplate/';

class ChecklistsPageContainer extends Component {
  constructor(props) {
      super(props);
      this.title = this.props.infoData.title
    }
    static route = {
      navigationBar: {
        title: this.title,
      }
    }
  render() {
    console.log('THIS IS A PAGE CHECKER', this.props.infoData.subsection )
    return (
      // <PictureList currentNavigatorUID='home' list={ checkLists }/>
      // <Text> YOU'RE ON THE RIGHT PAGE NOW HUE</Text>
      <CheckListTemplate infoData={this.props.infoData}/>
    );
  }
}

ChecklistsPageContainer.propTypes = {
  list: PropTypes.array
}

export default ChecklistsPageContainer;
