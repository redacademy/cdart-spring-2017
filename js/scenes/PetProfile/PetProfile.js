import React from 'react';
import { Image, TouchableHighlight, Text, View } from 'react-native';

import { styles } from './styles';

const PetProfile = ({ createProfile, myDogs }) => {
  return (
    myDogs.length < 1 ?
    <View>
      <TouchableHighlight onPress={() => createProfile(myDogs)} >
        <View style={styles.createProfile} >
          <Text>Create Pet Profile</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.bePrepared} >
        <Text>
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
<<<<<<< HEAD
            <View style={styles.dogText} >
              <Text>{dog.name}</Text>
              <Text style={styles.breed} >{dog.breed}</Text>
            </View>
            <Text style={styles.edit}>Edit</Text>
=======
            <Text>{dog.name}</Text>
            <Text>{dog.breed}</Text>
>>>>>>> 9cd6454b87421c48408729433d17ac2c2756466f
          </View>
        </TouchableHighlight>
      ))
    }
    </View>
  );
}

export default PetProfile;