import React, { Component } from 'react';

import { EmergencyKit } from './EmergencyKit'

class EmergencyKitContainer extends Component {
  render(){
    return (
      <EmergencyKit kitChecklist={kitChecklist} />
    )
  }
}

const kitChecklist = [
  'Pet food for 1 week',
  'Carrier',
  'Collar/ID Tags',
  'Leash',
  'Bottled Water',
  'Medication',
  'Litter and litter box',
  'Recent photos of your pet',
  'Can opener',
]

export default EmergencyKitContainer