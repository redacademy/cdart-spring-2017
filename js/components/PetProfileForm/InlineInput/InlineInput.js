import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';
import { Field } from 'redux-form';
import { styles } from './styles'

const InlineInput = ({ renderInput }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Name</Text>
      <Field name="name" component={(val) => renderInput(val)} />
    </View>
  );
}

export default InlineInput;