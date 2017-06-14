import React, { Component } from 'react';

import NewProfile from './NewProfile';

class NewProfileContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Updates',
    }
  }

  render() {
    return (
      <NewProfile />
    );
  }
}

export default NewProfileContainer;