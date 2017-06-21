import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import { Field } from 'redux-form';

import { styles } from './styles';

const renderText = (props) => {
  return <TextInput
          style={styles.textInput}
          editable={true}
          onChangeText={props.input.onChange}
        />
}

const AddressFields = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.heading}>Address</Text>
      <Field name='Address' component={renderText} />
      <Text style={styles.subheading}>Street Name and Number</Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Field name='City' component={renderText} />
          <Text style={styles.subheading}>City</Text>
        </View>
        <View>
          <Field name='Province' component={renderText} />
          <Text style={styles.subheading}>Province</Text>
        </View>

      </View>

      <Field name='PostalCode' component={renderText} />
      <Text style={styles.subheading}>Postal Code</Text>
    </View>
  );
}

export default AddressFields;