import React, { Component } from 'react';

import OnboardingSwiper from '../../components/OnboardingScreens/OnboardingSwiper';
import OnboardingWelcome from '../../components/OnboardingScreens/OnboardingWelcome';
import OnboardingPet from '../../components/OnboardingScreens/OnboardingPet';
import OnboardingVolunteer from '../../components/OnboardingScreens/OnboardingVolunteer';

class Onboarding extends Component {
  state = {  }
  render() {
    return (
      <OnboardingSwiper>
        <OnboardingWelcome />
        <OnboardingPet />
        <OnboardingVolunteer />
      </OnboardingSwiper>
    );
  }
}

export default Onboarding;
