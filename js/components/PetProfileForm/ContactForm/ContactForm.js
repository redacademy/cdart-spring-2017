import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import PhoneNumberField from '../PhoneNumberField';
import AddressFields from '../AddressFields';

import { styles } from './styles';

const ContactForm = () => {
  return(
    <View>
      <Text style={styles.heading}>Full Name</Text>
      <TextInput
        style={styles.textInput}
        editable={true}
      />

      <PhoneNumberField />

      <Text style={styles.heading}>Email Address</Text>
      <TextInput
        style={styles.textInput}
        editable={true}
      />

      <AddressFields />

    </View>
  );
}

export default ContactForm;