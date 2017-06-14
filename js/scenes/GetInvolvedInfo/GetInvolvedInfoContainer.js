import React, { Component } from 'react';

import {
  Linking
} from 'react-native';

import GetInvolvedInfo from './GetInvolvedInfo';

class GetInvolvedInfoContainer extends Component {
  constructor(props) {
    super(props);
    this.title = this.props.infoData.title
  }
  static route = {
    navigationBar: {
      title: this.title,
    }
  }

  handleClick = (url) => {
    console.log(url)
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + url);
      }
    });
  };

  render() {
    return(
        <GetInvolvedInfo
        infoData={this.props.infoData}
        handleClick={this.handleClick} />
    );
  }
}

export default GetInvolvedInfoContainer;
