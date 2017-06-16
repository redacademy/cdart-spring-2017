import React from 'react';
import { Image, TouchableHighlight, Text, View } from 'react-native';

import { styles } from './styles';

const petImage = require('../../assets/icons/pet-profile.png')
const plusCircle = require('../../assets/icons/plus-circle-black@2x.png');

const PetProfile = ({ createProfile, myDogs }) => {
  return (
    myDogs.length < 1 ?
    <View>
      <TouchableHighlight onPress={() => createProfile(myDogs)} >
        <View style={styles.createProfile} >
          <Text style={styles.createProfileText} >Create Pet Profile</Text>
          <Image source={plusCircle} style={styles.plusCircle} />
        </View>
      </TouchableHighlight>
      <View style={styles.bePrepared} >
        <Image source={petImage} />
        <Text style={styles.bePreparedText} >
          Be prepared. Create a shareable pet profile to help you
          & emergency services locate your pet in case of an emergency.
        </Text>
      </View>
    </View>
    :
    <View>
    {
      myDogs.map((dog, i) => (
        <TouchableHighlight key={dog.name + i} onPress={() => createProfile(myDogs)} >
          <View style={styles.singleDog} >
            <Image source={dog.picture} style={styles.dogPic} />
            <View style={styles.dogText} >
              <Text>{dog.name}</Text>
              <Text style={styles.breed} >{dog.breed}</Text>
            </View>
            <Text style={styles.edit}>Edit</Text>
          </View>
        </TouchableHighlight>
      ))
    }
    </View>
  );
}

export default PetProfile;