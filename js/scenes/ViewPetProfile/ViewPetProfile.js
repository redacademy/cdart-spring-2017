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

const ViewProfile = ({ petInfo }) => (
  <ScrollView>
  <View style={ styles.profileContainer }>
    <Image source={ petInfo.profileImage } style={ styles.profileImage } />

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
      <Text style={ styles.rightText }>{ petInfo.colour }</Text>
    </View>

    <View style={ styles.buttonRow }>
      {
        petInfo.sex === 'Male' ?
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
        petInfo.spayedOrNeutered === true ?

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
        petInfo.temperament.map( temperament => (
          temperament.selected === true ?
            <View key={ temperament.type + Date.now() }style={ styles.selectedTemperamentBubble }>
              <Text style={ styles.selectedTemperamentText }>
                Friendly
              </Text>
            </View> :

            <View key={ temperament.type + Date.now() }style={ styles.temperamentBubble }>
              <Text style={ styles.temperamentText }>
                Friendly
              </Text>
            </View>
        ))
      }
    </View>

    <View style={ styles.textInfoSection }>
      <View style={ styles.blueTextArea }>
        <Text style={ styles.blueTextAreaText }>{ petInfo.temperamentText }</Text>
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
        <Text style={ styles.blueTextAreaText }>{ petInfo.careInstructions }</Text>
      </View>

      <View style={ styles.whiteTextArea }>
        <Text style={ styles.sectionHeader }>Medical Alerts</Text>
      </View>
      <View style={ styles.blueTextArea }>
        <Text style={ styles.blueTextAreaText }>{ petInfo.medicalAlerts }</Text>
      </View>
    </View>
    </View>
  </ScrollView>
)

export default ViewProfile;
