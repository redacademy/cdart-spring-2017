import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

import { colors } from '../../../config/styles';
import { styles } from './styles';

const MultilineTextarea = () => {
  return (
    <View>
      <Text style={styles.heading}>Distinguishing Features</Text>
      <TextInput
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

export default MultilineTextarea;