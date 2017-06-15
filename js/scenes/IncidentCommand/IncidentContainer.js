import React, { Component } from 'react';
import Incident from './Incident';

const incidentList = [
  'Command',
  'Operations',
  'Logistics',
  'Planning',
  'Finance'
]

class IncidentContainer extends Component {
  render(){
    return (
      <Incident incidentList={incidentList} />
    )
  }
}

export default IncidentContainer;