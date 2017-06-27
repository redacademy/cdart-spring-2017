import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form'
import PropTypes from 'prop-types';

import { ScrollView, View, Text, TextInput } from 'react-native';

import ImageUploader from '../../components/PetProfileForm/ImageUploader';
import InlineInput from '../../components/PetProfileForm/InlineInput';
import MultilineTextarea from '../../components/PetProfileForm/MultilineTextarea';
import ToggleButton from '../../components/PetProfileForm/ToggleButton';
import SwitchButton from '../../components/PetProfileForm/SwitchButton';
import SaveButton from '../../components/PetProfileForm/SaveButton';
import ContactInfoItem from '../../components/PetProfileForm/ContactInfoItem';

import { styles } from './styles';

const NewProfile = (props) => {

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'} >

      <ImageUploader
        currentNavigatorUID="petProfile"
        selectedImage={props.selectedImage}/>

      <Field name="Name" title="Name" component={InlineInput} data={props.data.name ? props.data.name : ''} />
      <Field name="Age" title="Age" component={InlineInput} data={props.data.age ? props.data.age : ''} />
      <Field name="Species" title="Species" component={InlineInput} data={props.data.species ? props.data.species : ''} />
      <Field name="Breed" title="Breed" component={InlineInput} data={props.data.breed ? props.data.breed : ''} />
      <Field name="Color" title="Color" component={InlineInput} data={props.data.color ? props.data.color : ''} />

      <View style={styles.inlineButtonsWrapper}>
        <Field name="Gender" title="Gender"component={SwitchButton} data={props.data.sex ? props.data.sex : ''} />
        <ToggleButton info='Spayed' toggled={props.data.temperaments} />
      </View>

      <Text style={styles.heading}>Temperament</Text>
      <View style={styles.toggleButtonsWrapper}>
        <ToggleButton info='Friendly' toggled={props.data.temperaments ? props.data.temperaments : []} />
        <ToggleButton info='Energetic' toggled={props.data.temperaments ? props.data.temperaments : []} />
        <ToggleButton info='Timid' toggled={props.data.temperaments ? props.data.temperaments : []} />
        <ToggleButton info='Aggresive' toggled={props.data.temperaments ? props.data.temperaments : []} />
        <ToggleButton info='Obedient' toggled={props.data.temperaments ? props.data.temperaments : []} />
      </View>

      <Field name="Expand" title="Expand" component={MultilineTextarea} data={props.data.expand ? props.data.expand : ''} />
      <Field name="DistinguishingFeatures" title="Distinguishing Features" component={MultilineTextarea} data={props.data.distinguishingFeatures ? props.data.distinguishingFeatures : ''} />
      <Field name="CareInstructions" title="Care Instructions"component={MultilineTextarea} data={props.data.careInstructions ? props.data.careInstructions : ''} />
      <Field name="MedicalAlerts" title="Medical Alerts" component={MultilineTextarea} data={props.data.medicalAlert ? props.data.medicalAlert : ''} />

      <FieldArray name="Microchip" title="Microchip" component={ContactInfoItem} />
      <FieldArray name="OwnerContact" title="Owner Contact" component={ContactInfoItem} />
      <FieldArray name="VeterinarianContact" title="Veterinarian Contact" component={ContactInfoItem} />
      <FieldArray name="SecondaryContact" title="Secondary Contact" component={ContactInfoItem} />

      <SaveButton originalData={props.data} currentNavigatorUID={props.currentNavigatorUID} id={props.data.id ? props.data.id : ''} />
    </ScrollView>
  );
}

NewProfile.propTypes = {
  currentNavigatorUID: PropTypes.string,
  data: PropTypes.object,
  selectedImage: PropTypes.string,
}

export default NewProfile;
