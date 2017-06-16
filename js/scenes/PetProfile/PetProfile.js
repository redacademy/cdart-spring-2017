import React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';

import { styles } from './styles';

const petImage = require('../../assets/icons/pet-profile.png')
const plusCircle = require('../../assets/icons/plus-circle-black@2x.png');

const PetProfile = ({ createProfile, myDogs }) => {
  return (
    myDogs.length < 1 ?
    <View>
      <TouchableOpacity onPress={() => createProfile(myDogs)} >
        <View style={styles.createProfile} >
          <Text style={styles.createProfileText} >Create Pet Profile</Text>
          <Image source={plusCircle} style={styles.plusCircle} />
        </View>
      </TouchableOpacity>
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
        <TouchableOpacity key={dog.name + i} onPress={() => createProfile(myDogs)} >
          <View style={styles.singleDog} >
            <View style={styles.dogPicContainer} >
              <Image source={dog.picture} style={styles.dogPic} />
            </View>
            <View style={styles.dogText} >
              <Text style={styles.name} >{dog.name}</Text>
              <Text style={styles.breed} >{dog.breed}</Text>
            </View>
            <Text style={styles.edit}>Edit</Text>
          </View>
        </TouchableOpacity>
      ))
    }
    </View>
  );
}

export default PetProfile;