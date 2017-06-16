import React from 'react';

import { ScrollView, View, Text, TextInput } from 'react-native';

import InlineInput from '../../components/PetProfileForm/InlineInput';
import MultilineTextarea from '../../components/PetProfileForm/MultilineTextarea';
import ToggleButton from '../../components/PetProfileForm/ToggleButton';
import SwitchButton from '../../components/PetProfileForm/SwitchButton';
import SaveButton from '../../components/PetProfileForm/SaveButton';

import { colors } from '../../config/styles';
import { styles } from './styles';

const NewProfile = () => {
  console.log('hi from new profile');
  return (
    <ScrollView style={styles.container}>

      <Text>Add Photo</Text>

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
        placeholderTextColor={'gray'}
      />

      <MultilineTextarea />
      <MultilineTextarea />
      <MultilineTextarea />

      <SaveButton />
    </ScrollView>
  );
}

export default NewProfile;
