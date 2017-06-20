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

const NewProfile = (props) => {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'} >

      <Text>Add Photo</Text>

      <Field name="name" component={InlineInput} />

      <View style={styles.inlineButtonsWrapper}>
        <Field name="gender" component={SwitchButton} />
        <Field name="test" component={ToggleButton} />
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

      <SaveButton handleSubmit={props.handleSubmit} />
    </ScrollView>
  );
}

export default NewProfile;
