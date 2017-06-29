import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      title( params ) {
        return params.infoData.title;
      }
    }
  }

  handleClick = (url) => {
    Linking.canOpenURL(url).then(supported => {
        supported && Linking.openURL(url);
    }, (err) => console.log(err));
  };

  render() {
    return(
        <GetInvolvedInfo
        infoData={this.props.infoData}
        handleClick={this.handleClick} />
    );
  }
}

GetInvolvedInfoContainer.propTypes = {
  infoData: PropTypes.object,
}

export default GetInvolvedInfoContainer;
