import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import { styles } from './styles';

const AddressFields = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.heading}>Address</Text>
      <TextInput
        style={styles.textInput}
        editable={true}
      />
      <Text style={styles.subheading}>Street Name and Number</Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <TextInput
            style={[styles.textInputMedium, styles.textInput]}
            editable={true}
          />
          <Text style={styles.subheading}>City</Text>
        </View>
        <View>
          <TextInput
            style={[styles.textInputShort, styles.textInput]}
            editable={true}
          />
          <Text style={styles.subheading}>Province</Text>
        </View>

      </View>

      <TextInput
        style={[styles.textInputMedium, styles.textInput]}
        editable={true}
      />
      <Text style={styles.subheading}>Postal Code</Text>
    </View>
  );
}

export default AddressFields;