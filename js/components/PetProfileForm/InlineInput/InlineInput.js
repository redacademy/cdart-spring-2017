import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

import { styles } from './styles';

const InlineInput = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Name</Text>
      <TextInput
        style={styles.textInput}
        editable={true}
      />
    </View>
  );
}

export default InlineInput;