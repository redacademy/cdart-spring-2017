import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import { Field } from 'redux-form';

import { styles } from './styles';

const renderAddress = (props) => {
  return <TextInput
          style={styles.textInput}
          editable={true}
          onChangeText={props.input.onChange}
          defaultValue={props.data.street}
        />
}

const renderCity = (props) => {
  return <TextInput
          style={styles.textInput}
          editable={true}
          onChangeText={props.input.onChange}
          defaultValue={props.data.city}
        />
}

const renderProvince = (props) => {
  return <TextInput
          style={styles.textInput}
          editable={true}
          onChangeText={props.input.onChange}
          defaultValue={props.data.province}
        />
}

const renderPostal = (props) => {
  return <TextInput
          style={styles.textInput}
          editable={true}
          onChangeText={props.input.onChange}
          defaultValue={props.data.postal}
        />
}

const AddressFields = (props) => {
  return(
    <View style={styles.container}>
      <Text style={styles.heading}>Address</Text>
      <Field name={`${props.fieldName}Address`} data={props.data} component={renderAddress} />
      <Text style={styles.subheading}>Street Name and Number</Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Field name={`${props.fieldName}PostalCode`} data={props.data} component={renderPostal} />
          <Text style={styles.subheading}>Postal Code</Text>
        </View>
        <View>
          <Field name={`${props.fieldName}Province`} data={props.data} component={renderProvince} />
          <Text style={styles.subheading}>Province</Text>
        </View>

      </View>

      <Field name={`${props.fieldName}City`} data={props.data} component={renderCity} />
      <Text style={styles.subheading}>City</Text>
    </View>
  );
}

export default AddressFields;
