import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Field } from 'redux-form';

import { styles } from './styles';

const renderText = (props) => {
  return <TextInput
          style={styles.textInput}
          editable={true}
          onChangeText={props.input.onChange}
        />
}

const PhoneNumberField = (props) => {
  return (
    <View>
      <Text style={styles.heading}>Phone Number</Text>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Field name={`${props.fieldName}PhoneNumber1`} component={renderText} />
          <Text style={styles.subheading}>Area Code</Text>
        </View>

        <Field name={`${props.fieldName}PhoneNumber2`} component={renderText} />
        <Icon
          name={'ios-remove'}
          size={20}
          style={{height: 30, alignSelf: 'center', marginRight: 10}}
        />
        <Field name={`${props.fieldName}PhoneNumber3`} component={renderText} />
      </View>
    </View>
  );
}

export default PhoneNumberField;
