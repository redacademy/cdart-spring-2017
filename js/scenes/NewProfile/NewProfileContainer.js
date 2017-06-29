import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormValues, reduxForm } from 'redux-form';

import NewProfile from './NewProfile';

const currentNavigatorUID = 'petProfile';

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
})(NewProfileContainer)

export default connect(mapStateToProps)(NewProfileForm);