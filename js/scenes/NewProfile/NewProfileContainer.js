import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormValues, reduxForm } from 'redux-form';

import NewProfile from './NewProfile';

class NewProfileContainer extends Component {

  static route = {
    navigationBar: {
      title: 'New Profile',
    }
  }

  handleSubmit(){
  }

  render() {
    return (
      <NewProfile
        {...this.props}
        handleSubmit={() => this.handleSubmit()}
        selectedImage={this.props.selectedImage}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    formValues: getFormValues('NewProfileForm')(state),
    selectedImage: state.petProfile.toggleInputs.selectedImage
  }
}

const NewProfileForm = reduxForm({
  form: 'NewProfileForm',
})(NewProfileContainer)

export default connect(mapStateToProps)(NewProfileForm);
