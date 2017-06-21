import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import PhoneNumberField from '../PhoneNumberField';
import AddressFields from '../AddressFields';

import { styles } from './styles';

const ContactForm = (props) => {
  return(
    <View>
      <Text style={styles.heading}>Full Name</Text>
      <TextInput
        style={styles.textInput}
        editable={true}
        onChangeText={props.input.onChange}
      />

      <PhoneNumberField {...props} />

      <Text style={styles.heading}>Email Address</Text>
      <TextInput
        style={styles.textInput}
        editable={true}
        onChangeText={props.input.onChange}
      />

      <AddressFields />

    </View>
  );
}

export default ContactForm;