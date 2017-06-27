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
          defaultValue={props.data}
        />
}

const PhoneNumberField = (props) => {
  return (
    <View>
      <Text style={styles.heading}>Phone Number</Text>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Field name={`${props.fieldName}PhoneNumber1`} data={props.data} component={renderText} />
          <Text style={styles.subheading}>Area Code</Text>
        </View>

        <Field name={`${props.fieldName}PhoneNumber2`} data={props.data} component={renderText} />
        <Icon
          name={'ios-remove'}
          size={20}
          style={{height: 30, alignSelf: 'center', marginRight: 10}}
        />
        <Field name={`${props.fieldName}PhoneNumber3`} data={props.data} component={renderText} />
      </View>
    </View>
  );
}

export default PhoneNumberField;
