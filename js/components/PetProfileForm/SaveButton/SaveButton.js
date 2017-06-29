import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createPetProfile, updatePetProfile } from '../../../config/models';
import { goToSubpage, clearNavStack } from '../../../lib/navigationHelpers';


import { styles } from './styles';

class SaveButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    }
  }

  handleSubmit = () => {
    console.log(this.props.formData);
    let id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    createPetProfile(this.props.formData.NewProfileForm.values, this.props.formToggle, id);
    clearNavStack('petProfile');
  }

  handleEdit = () => {
    updatePetProfile(this.props.formData.NewProfileForm.values, this.props.formToggle, this.props.originalData, this.props.id);
    clearNavStack('petProfile');
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.id ? this.handleEdit : this.handleSubmit } style={styles.button}>
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
    );
  }
}

SaveButton.propTypes = {
  originalData: PropTypes.object,
  id: PropTypes.string,
  formData: PropTypes.object
}

export default SaveButton;

