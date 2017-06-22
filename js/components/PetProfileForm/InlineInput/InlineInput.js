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
      <Text style={styles.heading}>Name</Text>
      <TextInput
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        style={styles.textInput}
        />
    </View>
  );
}
