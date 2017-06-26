import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import { createPetProfile } from '../../../config/models';

import { styles } from './styles';

class SaveButton extends Component {

  constructor() {
    super();
    this.state = {
      selected: false,
    }
  }

  handleSubmit = () => {
    console.log(this.props.formData.form.NewProfileForm);
    createPetProfile(this.props.formData.form.NewProfileForm.values, this.props.formData.toggleInputs);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
    );
  }
}

function mapStateToProps(state){
  return {
    formData: state.petProfile,
  }
}

export default connect(mapStateToProps)(SaveButton);
