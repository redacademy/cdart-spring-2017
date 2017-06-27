import React, { Component } from 'react';
import { ListView } from 'react-native';
import PropTypes from 'prop-types';

import { receptionShelterSetup, dailyVolunteerDuties, basicAnimalCare, animalConditionInspection } from '../../assets/data';
import NumberList from './NumberList';

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
class NumberListContainer extends Component {

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
      <NumberList dataSource={this.state.dataSource} />
    );
  }
}
NumberListContainer.propTypes = {
  data: PropTypes.object
}

export default NumberListContainer;
