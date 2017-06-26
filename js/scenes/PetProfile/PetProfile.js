import React from 'react';
import { Image, TouchableOpacity, Text, View, Button } from 'react-native';

import { goToSubpage } from '../../lib/navigationHelpers';

import { styles } from './styles';
import { colors } from '../../config/styles';

const petImage = require('../../assets/icons/new_pet_profile_icon.png')
const plusCircle = require('../../assets/icons/plus-circle-black@2x.png');

const PetProfile = ({ myPets, currentNavigatorUID }) => {
  return (
    myPets.length < 1 ?
    <View>
      <TouchableOpacity onPress={() => goToSubpage('newProfile', currentNavigatorUID)} >
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
      myPets.map((pet, i) => (
        <TouchableOpacity key={pet.name + i} onPress={() => goToSubpage('viewPetProfile', currentNavigatorUID, pet)} >
          <View style={styles.singlePet} >
            <View style={styles.petPicContainer} >
              <Image
                source={{ uri: pet.image }}
                style={styles.petPic} />
            </View>
            <View style={styles.petText} >
              <Text style={styles.name} >{pet.name}</Text>
              <Text style={styles.breed} >{pet.breed}</Text>
            </View>
            <Text style={styles.edit}>Edit</Text>
          </View>
        </TouchableOpacity>
      ))
    }

      <Button
        title='Create New'
        onPress={ () => goToSubpage( 'newProfile', currentNavigatorUID ) }
      >
        Create New
      </Button>
    </View>
  );
}

export default PetProfile;
