import React, { Component } from 'react';

import NewProfile from './NewProfile';

class NewProfileContainer extends Component {

  static route = {
    navigationBar: {
      title: 'New Profile',
    }
  }

  handleSubmit(){
    console.log('Hey now youre a rockstar');
  }

  render() {
    return (
      <NewProfile handleSubmit={this.handleSubmit} />
    );
  }
}

export default NewProfileContainer;