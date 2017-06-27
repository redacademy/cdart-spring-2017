import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormValues, reduxForm } from 'redux-form';

import NewProfile from './NewProfile';

const currentNavigatorUID = 'petProfile';

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Name Required';
    console.log('name', errors.name);
  } else if (values.name.length < 5) {
    errors.name = 'Name error'
    console.log('name length error', values.name);
  }
  if (!values.age) {
    errors.age = 'Age Required'
    console.log('age', errors.age);
  } else if (values.age.length > 60) {
    errors.age = 'Age error'
    console.log('age length error', values.age);
  }
  if (!values.species) {
    errors.species = 'Species Required'
    console.log('species', errors.species);
  } else if (values.species.length < 5) {
    errors.species = 'Species error'
    console.log('species length error', values.species);
  }
  if (!values.breed) {
    errors.breed = 'Breed Required'
    console.log('breed', errors.breed);
  } else if (values.breed.length < 5) {
    errors.breed = 'Breed error'
    console.log('breed length error', values.breed);
  }
  if (!values.color) {
    errors.color = 'Color Required'
    console.log('color', errors.color);
  } else if (values.color.length < 5) {
    errors.color = 'Color error'
    console.log('color length error', values.color);
  }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

class NewProfileContainer extends Component {

  static route = {
    navigationBar: {
      title: 'New Profile'
    }
  }

  render() {
    return (
      <NewProfile
        {...this.props}
        currentNavigatorUID={currentNavigatorUID}
        selectedImage={this.props.selectedImage}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    formData: state.petProfile,
    formValues: getFormValues('NewProfileForm')(state),
    selectedImage: state.petProfile.toggleInputs.selectedImage
  }
}

const NewProfileForm = reduxForm({
  form: 'NewProfileForm',
  validate,
  warn
})(NewProfileContainer)

export default connect(mapStateToProps)(NewProfileForm);