import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';

import GetInvolvedList from '../../components/GetInvolvedScreens/GetInvolvedList';

import { colors } from '../../config/styles';

const GetInvolved = ({list}) => {
  return (
    <View style={{ backgroundColor: colors.dimBlue, flex: 1 }}>
      <GetInvolvedList list={list} />
    </View>
  );
}

GetInvolved.propTypes = {
  list: PropTypes.array,
};

export default GetInvolved;
