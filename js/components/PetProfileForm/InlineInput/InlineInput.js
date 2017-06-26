import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

import { styles } from './styles';

export default function InlineInput(props) {
  const { input, ...inputProps } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{input.name}</Text>
      <TextInput
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        style={styles.textInput}
        defaultValue={props.data}
        />
    </View>
  );
}
