import React from 'react';

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

const NewProfile = () => {
  console.log('hi from new profile');
  return (
    <ScrollView style={styles.container}>

      <ImagePicker />

      <InlineInput />
      <InlineInput />
      <InlineInput />
      <InlineInput />
      <InlineInput />
      <InlineInput />

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

      <SaveButton />
    </ScrollView>
  );
}

export default NewProfile;
