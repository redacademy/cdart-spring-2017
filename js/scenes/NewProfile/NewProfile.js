import React from 'react';
import { Field, reduxForm } from 'redux-form'

import { ScrollView, View, Text, TextInput } from 'react-native';

import InlineInput from '../../components/PetProfileForm/InlineInput';
import MultilineTextarea from '../../components/PetProfileForm/MultilineTextarea';
import ToggleButton from '../../components/PetProfileForm/ToggleButton';
import SwitchButton from '../../components/PetProfileForm/SwitchButton';
import SaveButton from '../../components/PetProfileForm/SaveButton';
import ContactInfoItem from '../../components/PetProfileForm/ContactInfoItem';

import { colors } from '../../config/styles';
import { styles } from './styles';

const NewProfile = ({ handleSubmit, renderInput }) => {
  return (
    <ScrollView style={styles.container} onSubmit={val => handleSubmit(val)} >

      <Text>Add Photo</Text>

      <InlineInput renderInput={renderInput} />
      <InlineInput renderInput={renderInput} />
      <InlineInput renderInput={renderInput} />
      <InlineInput renderInput={renderInput} />
      <InlineInput renderInput={renderInput} />
      <InlineInput renderInput={renderInput} />

      <View style={styles.inlineButtonsWrapper}>
        <SwitchButton />
        <ToggleButton />
      </View>

      <Text style={styles.heading}>Temperament</Text>
      <View style={styles.toggleButtonsWrapper}>
        <ToggleButton />
        <ToggleButton />
        <ToggleButton />
        <ToggleButton />
        <ToggleButton />
      </View>
      <TextInput
        style={styles.multilineInput}
        editable={true}
        multiline={true}
        numberOfLines={3}
        placeholder={`Expand on your animal's temperament`}
        placeholderTextColor={colors.grey}
      />

      <MultilineTextarea />
      <MultilineTextarea />
      <MultilineTextarea />

      <ContactInfoItem />
      <ContactInfoItem />
      <ContactInfoItem />

      <SaveButton handleSubmit={handleSubmit} />
    </ScrollView>
  );
}

export default reduxForm({
  form: 'pet'
})(NewProfile)
