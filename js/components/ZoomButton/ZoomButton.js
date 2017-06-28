import React from 'react';
import { PropTypes } from 'prop-types';

import { styles } from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

import {
  View,
  TouchableWithoutFeedback
} from 'react-native';

const ZoomButton = ({ iconName, zoom }) => {
  return (
    <TouchableWithoutFeedback
      title="i"
      onPress={() => zoom()}
      style={ styles.buttonWrapper }
    >
      <View style={ styles.zoomButton }>
        <Icon
          name={ iconName }
          size={ 25 }
          color={ 'white' }
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

ZoomButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  zoom: PropTypes.func.isRequired
}

export default ZoomButton;
