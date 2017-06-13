import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Onboarding from './Onboarding';

class OnboardingContainer extends Component {
  state = {  }
  render() {
    return (
      <Onboarding />
    );
  }
}

export default OnboardingContainer;
