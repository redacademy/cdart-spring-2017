import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import { Field, FieldArray } from 'redux-form'

import PhoneNumberField from '../PhoneNumberField';
import AddressFields from '../AddressFields';

import { styles } from './styles';

const renderText = (props) => {
  return <TextInput
          style={styles.textInput}
          editable={true}
          onChangeText={props.input.onChange}
        />
}


const ContactForm = (props) => {
  return(
    <View>
      <Text style={styles.heading}>Full Name</Text>
      <Field name='HumanName' component={renderText} />

      <FieldArray name='PhoneNumberField' component={PhoneNumberField} />

      <Text style={styles.heading}>Email Address</Text>
      <Field name='EmailAddress' component={renderText} />

      <FieldArray name='AddressField' component={AddressFields} />

    </View>
  );
}

export default ContactForm;