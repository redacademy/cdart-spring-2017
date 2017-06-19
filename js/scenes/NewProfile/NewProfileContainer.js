import React, { Component } from 'react';
import { TextInput } from 'react-native';

import NewProfile from './NewProfile';
import { styles } from '../../components/PetProfileForm/InlineInput'

class NewProfileContainer extends Component {

  static route = {
    navigationBar: {
      title: 'New Profile',
    }
  }

  handleSubmit(value){
    console.log('Hey now youre a rockstar', value);
  }

  renderInput = ({ input: { onChange, ...restInput }}) => {
    console.log('shit boi')
    return <TextInput onChangeText={onChange} {...restInput} />
  }

  render() {
    return (
      <NewProfile handleSubmit={this.handleSubmit} renderInput={this.renderInput} />
    );
  }
}

export default NewProfileContainer;