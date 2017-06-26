import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import { createPetProfile, updatePetProfile } from '../../../config/models';
import { goToSubpage } from '../../../lib/navigationHelpers';

import { styles } from './styles';

class SaveButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    }
  }

  handleSubmit = () => {
    let id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    createPetProfile(this.props.formData.form.NewProfileForm.values, this.props.formData.toggleInputs, id);
    goToSubpage( 'petProfile', this.props.currentNavigatorUID );
  }

  handleEdit = () => {
    updatePetProfile(this.props.formData.form.NewProfileForm.values, this.props.formData.toggleInputs, this.props.originalData, this.props.id);
    goToSubpage( 'petProfile', this.props.currentNavigatorUID );
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.id ? this.handleEdit : this.handleSubmit } style={styles.button}>
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

