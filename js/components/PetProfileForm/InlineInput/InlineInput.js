import React from 'react';

import {
  View,
  Text,
  TextInput
} from 'react-native';

import { styles } from './styles';

export default function InlineInput(props) {
  const { input, meta, ...inputProps} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{input.name}</Text>
      <View><TextInput
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        style={styles.textInput}
        />
        {meta.touched ? console.log(input.name, 'has been touched!') : console.log('nothing happening here in: ', input.name)}
        </View>
    </View>
  );
}
