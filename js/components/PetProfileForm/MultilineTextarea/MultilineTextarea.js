import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

import { colors } from '../../../config/styles';
import { styles } from './styles';

export default function MultilineTextarea(props) {
  const { input, ...inputProps } = props;

  return (
    <View>
      <Text style={styles.heading}>{input.name}</Text>
      <TextInput
        onChangeText={input.onChange}
        value={input.value}
        style={styles.multilineInput}
        editable={true}
        multiline={true}
        numberOfLines={3}
        placeholder={`This is placeholder text`}
        placeholderTextColor={colors.grey}
      />
    </View>
  );
}