import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export default function InlineInput(props) {
  const { input, ...inputProps } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{input.name}</Text>
      <TextInput
        onChangeText={ val => input.onChange(val) }
        onBlur={ val => input.onBlur(val) }
        onFocus={input.onFocus}
        style={styles.textInput}
        defaultValue={props.data}
        value={input.value}
        />
    </View>
  );
}

InlineInput.propTypes = {
  input: PropTypes.object,
  data: PropTypes.string
}
