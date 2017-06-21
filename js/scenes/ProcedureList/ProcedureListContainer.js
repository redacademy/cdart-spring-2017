import React, { Component } from 'react';
import { ListView } from 'react-native';

import { receptionShelterSetup, dailyVolunteerDuties, basicAnimalCare, animalConditionInspection } from '../../assets/data';
import ProcedureList from './ProcedureList';

const whichInfo = (title) => {
  switch(title){
    case 'Daily Volunteer Duties':
      return dailyVolunteerDuties;
    case 'Reception Shelter Centre Setup':
      return receptionShelterSetup;
    case 'Animal Condition Inspection':
      return animalConditionInspection;
    case 'Basic Animal Care':
      return basicAnimalCare;
  }
}
class ReceptionContainer extends Component {

  static route = {
    navigationBar: {
      title(params) {
        return params.data.title
      }
    }
  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(whichInfo(this.props.data.title)),
    };
  }

  render(){
    return (
      <ProcedureList dataSource={this.state.dataSource} />
    );
  }
}

export default ReceptionContainer;
