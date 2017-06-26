import React from 'react';
import { PropTypes } from 'prop-types';

import { styles } from './styles';
import { colors } from '../../config/styles';

const { height, width } = Dimensions.get('window');

import {
  ScrollView,
  View,
  Image,
  Text,
  Dimensions
} from 'react-native';

import ContactInfoDisplay from '../../components/ContactInfoDisplay';

const ViewProfile = ({ petInfo }) => (
  <ScrollView>
    <View style={ styles.profileContainer }>
      <Image source={{ uri: petInfo.image }} style={ styles.profileImage } />

      <View style={ styles.textRow }>
        <Text style={ styles.nameLabel }>Name</Text>
        <Text style={ styles.name }>{ petInfo.name }</Text>
      </View>

      <View style={ styles.seperator }/>

      <View style={ styles.textRow }>
        <Text style={ styles.leftText }>Age</Text>
        <Text style={ styles.rightText }>{ petInfo.age }</Text>
      </View>

      <View style={ styles.textRow }>
        <Text style={ styles.leftText }>Species</Text>
        <Text style={ styles.rightText }>{ petInfo.species }</Text>
      </View>

      <View style={ styles.textRow }>
        <Text style={ styles.leftText }>Breed</Text>
        <Text style={ styles.rightText }>{ petInfo.breed }</Text>
      </View>

      <View style={ styles.textRow }>
        <Text style={ styles.leftText }>Colour</Text>
        <Text style={ styles.rightText }>{ petInfo.color }</Text>
      </View>

      <View style={ styles.buttonRow }>
        {
          petInfo.sex === 'male' ?
            <View style={ styles.genderToggle }>
              <View style={ styles.gender }>
                <Text style={ styles.genderText }>
                  Female
                </Text>
              </View>
              <View style={ styles.selectedGender } >
                <Text style={ styles.selectedGenderText }>
                  Male
                </Text>
              </View>
            </View> :

            <View style={ styles.genderToggle }>
              <View style={ styles.selectedGender }>
                <Text style={ styles.selectedGenderText }>
                  Female
                </Text>
              </View>
              <View style={ styles.gender } >
                <Text style={ styles.genderText }>
                  Male
                </Text>
              </View>
            </View>
        }

        {
          petInfo.neutered === 'Spayed' || 'Neutered' ?

            <View style={ styles.neutered }>
              <Text style={ styles.neuteredText }>Spayed/Neutered</Text>
            </View> :

            <View style={ styles.notNeutered }>
              <Text style={ styles.notNeuteredText }>Spayed/Neutered</Text>
            </View>
        }
      </View>

      <Text style={ styles.sectionHeader }>Temperament</Text>

      <View style={ styles.temperamentSection }>
        {
          petInfo.temperaments.map( temperament => (
            temperament.temperament ?
              <View key={ Math.random() + Date.now() }style={ styles.selectedTemperamentBubble }>
                <Text style={ styles.selectedTemperamentText }>
                  { temperament.temperament }
                </Text>
              </View> :

              <View key={ temperament.type + Date.now() }style={ styles.temperamentBubble }>
                <Text style={ styles.temperamentText }>
                  { temperament.temperament }
                </Text>
              </View>
          ))
        }
      </View>

      <View style={ styles.textInfoSection }>
        <View style={ styles.blueTextArea }>
          <Text style={ styles.blueTextAreaText }>{ petInfo.temperInfo }</Text>
        </View>

        <View style={ styles.whiteTextArea }>
          <Text style={ styles.sectionHeader }>Distinguishing Features</Text>
        </View>
        <View style={ styles.blueTextArea }>
          <Text style={ styles.blueTextAreaText }>{ petInfo.features }</Text>
        </View>

        <View style={ styles.whiteTextArea }>
          <Text style={ styles.sectionHeader }>Care Instructions</Text>
        </View>
        <View style={ styles.blueTextArea }>
          <Text style={ styles.blueTextAreaText }>{ petInfo.care }</Text>
        </View>

        <View style={ styles.whiteTextArea }>
          <Text style={ styles.sectionHeader }>Medical Alerts</Text>
        </View>
        <View style={ styles.blueTextArea }>
          <Text style={ styles.blueTextAreaText }>{ petInfo.medicalAlert }</Text>
        </View>
      </View>

      <ContactInfoDisplay />
    </View>
  </ScrollView>
);


ViewProfile.propTypes = {
  petInfo: PropTypes.object.isRequired
}

export default ViewProfile;
