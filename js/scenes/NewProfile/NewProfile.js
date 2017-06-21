import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form'

import { ScrollView, View, Text, TextInput } from 'react-native';

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

      <Text>Add Photo</Text>

      <Field name="DogName" component={InlineInput} />

      <View style={styles.inlineButtonsWrapper}>
        <SwitchButton />
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
      <TextInput
        style={styles.multilineInput}
        editable={true}
        multiline={true}
        numberOfLines={3}
        placeholder={`Expand on your animal's temperament`}
        placeholderTextColor={colors.grey}
      />

      <Field name="distinguishing" component={MultilineTextarea} />
      <Field name="care" component={MultilineTextarea} />
      <Field name="medical" component={MultilineTextarea} />

      <FieldArray name="microchip" component={ContactInfoItem} />
      <FieldArray name="ownerContact" component={ContactInfoItem} />
      <FieldArray name="vetContact" component={ContactInfoItem} />

      <SaveButton handleSubmit={props.handleSubmit} />
    </ScrollView>
  );
}

export default NewProfile;
