import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form'

import { ScrollView, View, Text, TextInput } from 'react-native';

import ImagePicker from '../../scenes/ImagePicker/ImagePicker';
import InlineInput from '../../components/PetProfileForm/InlineInput';
import MultilineTextarea from '../../components/PetProfileForm/MultilineTextarea';
import ToggleButton from '../../components/PetProfileForm/ToggleButton';
import SwitchButton from '../../components/PetProfileForm/SwitchButton';
import SaveButton from '../../components/PetProfileForm/SaveButton';
import ContactInfoItem from '../../components/PetProfileForm/ContactInfoItem';

import { colors } from '../../config/styles';
import { styles } from './styles';

const NewProfile = (props) => {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'} >

      <ImagePicker />

      <Field name="Name" component={InlineInput} />
      <Field name="Age" component={InlineInput} />
      <Field name="Species" component={InlineInput} />
      <Field name="Breed" component={InlineInput} />
      <Field name="Color" component={InlineInput} />

      <View style={styles.inlineButtonsWrapper}>
        <Field name="Gender" component={SwitchButton} />
        <ToggleButton info='Spayed' />
      </View>

      <Text style={styles.heading}>Temperament</Text>
      <View style={styles.toggleButtonsWrapper}>
        <ToggleButton info='Energetic' />
        <ToggleButton info='Friendly' />
        <ToggleButton info='Timid' />
        <ToggleButton info='Aggresive' />
        <ToggleButton info='Obedient' />
      </View>

      <Field name="Expand" component={MultilineTextarea} />
      <Field name="Distinguishing Features" component={MultilineTextarea} />
      <Field name="Care Instructions" component={MultilineTextarea} />
      <Field name="Medical Alerts" component={MultilineTextarea} />

      <FieldArray name="Microchip" component={ContactInfoItem} />
      <FieldArray name="Owner Contact" component={ContactInfoItem} />
      <FieldArray name="Veterinarian Contact" component={ContactInfoItem} />
      <FieldArray name="Secondary Contact" component={ContactInfoItem} />

      <SaveButton handleSubmit={props.handleSubmit} />
    </ScrollView>
  );
}

export default NewProfile;
