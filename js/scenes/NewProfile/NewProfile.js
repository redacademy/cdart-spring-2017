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

const required = value => value ? undefined : 'Big Problem...';
const maxLength = max => value =>
  value && value.length > max ? console.log(`Must be ${max} characters or less`) : undefined
const maxLength50 = maxLength(50)


const NewProfile = (props) => {
  console.log('VALID >>> ', props.valid)
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'} >

      <ImageUploader
        currentNavigatorUID="petProfile"
        selectedImage={props.selectedImage ? props.selectedImage : props.data.image}/>

      <Field name="Name" title="Name" component={InlineInput} data={props.data.name ? props.data.name : ''} validate={required} />

      <Field name="Age" title="Age" component={InlineInput} data={props.data.age ? props.data.age : ''} validate={required} />
      <Field name="Species" title="Species" component={InlineInput} data={props.data.species ? props.data.species : ''} validate={required} />
      <Field name="Breed" title="Breed" component={InlineInput} data={props.data.breed ? props.data.breed : ''} validate={required} />
      <Field name="Color" title="Color" component={InlineInput} data={props.data.color ? props.data.color : ''} validate={required} />

      <View style={styles.inlineButtonsWrapper}>
        <Field name="Gender" title="Gender"component={SwitchButton} data={props.data.sex ? props.data.sex : ''} />
        <ToggleButton info='Spayed' title="Spayed/Neutered"selected={props.data.neutered} />
      </View>

      <Text style={styles.heading}>Temperament</Text>
      <View style={styles.toggleButtonsWrapper}>
        <ToggleButton info='Friendly' title='Friendly' toggled={props.data.temperaments ? props.data.temperaments : []} />
        <ToggleButton info='Energetic' title='Energetic'toggled={props.data.temperaments ? props.data.temperaments : []} />
        <ToggleButton info='Timid' title='Timid' toggled={props.data.temperaments ? props.data.temperaments : []} />
        <ToggleButton info='Aggresive' title='Aggresive' toggled={props.data.temperaments ? props.data.temperaments : []} />
        <ToggleButton info='Obedient' title='Obedient' toggled={props.data.temperaments ? props.data.temperaments : []} />
      </View>

      <Field name="Expand" title="Expand" component={MultilineTextarea} data={props.data.temperInfo ? props.data.temperInfo : ''} />
      <Field name="DistinguishingFeatures" title="Distinguishing Features" component={MultilineTextarea} data={props.data.features ? props.data.features : ''} />
      <Field name="CareInstructions" title="Care Instructions"component={MultilineTextarea} data={props.data.care ? props.data.care : ''} />
      <Field name="MedicalAlerts" title="Medical Alerts" component={MultilineTextarea} data={props.data.medicalAlert ? props.data.medicalAlert : ''} />

      <FieldArray name="Microchip" title="Microchip" component={ContactInfoItem} data={props.data.microchip ? props.data.microchip : ''} />
      <FieldArray name="OwnerContact" title="Owner Contact" component={ContactInfoItem} data={props.data.owner1 ? props.data.owner1 : ''} />
      <FieldArray name="VeterinarianContact" title="Veterinarian Contact" component={ContactInfoItem} data={props.data.vet ? props.data.vet : ''} />
      <FieldArray name="SecondaryContact" title="Secondary Contact" component={ContactInfoItem} data={props.data.owner2 ? props.data.owner2 : ''} />

      <SaveButton originalData={props.data} currentNavigatorUID={props.currentNavigatorUID} id={props.data.id ? props.data.id : ''} />
    </ScrollView>
  );
}

NewProfile.propTypes = {
  currentNavigatorUID: PropTypes.string,
  data: PropTypes.string,
  selectedImage: PropTypes.string,
}

export default NewProfile;


