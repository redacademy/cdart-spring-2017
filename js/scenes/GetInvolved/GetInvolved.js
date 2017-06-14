import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';

import GetInvolvedList from '../../components/GetInvolvedScreens/GetInvolvedList';

const GetInvolved = ({list}) => {
  return (
    <View>
      <GetInvolvedList list={list} />
    </View>
  );
}

GetInvolved.propTypes = {
  list: PropTypes.array,
};

export default GetInvolved;
