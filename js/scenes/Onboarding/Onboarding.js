import React, { Component } from 'react';
import { View } from 'react-native';

import OnboardingWelcome from '../../components/OnboardingScreens/OnboardingWelcome';
import OnboardingPet from '../../components/OnboardingScreens/OnboardingPet';
import OnboardingVolunteer from '../../components/OnboardingScreens/OnboardingVolunteer';

class Onboarding extends Component {
  state = {  }
  render() {
    return (
      <View>
        <OnboardingWelcome />
      </View>
    );
  }
}

export default Onboarding;
