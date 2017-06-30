import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import { Field, FieldArray } from 'redux-form'
import PropTypes from 'prop-types';

import PhoneNumberField from '../PhoneNumberField';
import AddressFields from '../AddressFields';

import { styles } from './styles';

const renderText = (props) => {
  return <TextInput
          style={styles.textInput}
          editable={true}
          onChangeText={props.input.onChange}
          defaultValue={props.data}
        />
}

const ContactForm = (props) => {
  let fieldName = '';
  if(props.fields.name === 'Microchip') return <Field name='Microchip' data={props.data} component={renderText} />;
  if(props.fields.name === 'OwnerContact') fieldName = 'Owner';
  if(props.fields.name === 'VeterinarianContact') fieldName = 'Vet';
  if(props.fields.name === 'SecondaryContact') fieldName = 'Secondary';
  return(
    <View style={styles.container}>
      <Text style={styles.heading}>Full Name</Text>
      <Field name={`${fieldName}Name`} data={props.data.name ? props.data.name : ''} component={renderText} />
      {fieldName === 'Vet' ?
        <View>
          <Text style={styles.heading}>Hospital/Clinic Name</Text>
          <Field name={`${fieldName}Hospital`} data={props.data.hospital} component={renderText} />
        </View>
        : null
      }
      <FieldArray name='PhoneNumberField' data={props.data.phone ? props.data.phone : ''} fieldName={fieldName} component={PhoneNumberField} />

      <Text style={styles.heading}>Email Address</Text>
      <Field name={`${fieldName}EmailAddress`} data={props.data.email ? props.data.email : ''} component={renderText} />

      <FieldArray name='AddressField' data={props.data ? props.data : ''} fieldName={fieldName} component={AddressFields} />

    </View>
    );
}

ContactForm.propTypes = {
  fields: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
}

export default ContactForm;
