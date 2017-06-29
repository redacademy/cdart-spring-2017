import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../../../config/styles';
import { styles } from './styles';

export default function MultilineTextarea(props) {
  const { input, ...inputProps } = props;

  return (
    <View>
      <Text style={styles.heading}>{props.title}</Text>
      <TextInput
        onChangeText={input.onChange}
        style={styles.multilineInput}
        editable={true}
        multiline={true}
        numberOfLines={3}
        placeholder={`This is placeholder text`}
        placeholderTextColor={colors.grey}
        defaultValue={props.data}
      />
    </View>
  );
}

MultilineTextarea.propTypes = {
  data: PropTypes.string,
  input: PropTypes.object
}
