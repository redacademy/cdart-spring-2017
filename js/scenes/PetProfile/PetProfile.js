import React from 'react';
import { PropTypes } from 'prop-types';

import { Image, TouchableOpacity, Text, View, Button, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { goToSubpage } from '../../lib/navigationHelpers';
import { deletePetProfile } from '../../config/models';

import { styles } from './styles';
import { colors } from '../../config/styles';

const petImage = require('../../assets/icons/new_pet_profile_icon.png')
const plusCircle = require('../../assets/icons/plus-circle-black@2x.png');

const PetProfile = ({ myPets, currentNavigatorUID }) => {
  return (
    myPets.petProfiles.length < 1 ?
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
      myPets.isLoading
      ? <Text>Loading pet profiles...</Text>

      : myPets.petProfiles.map((pet, i) => (
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
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.editContainer} onPress={() => goToSubpage('newProfile', currentNavigatorUID, pet)}>
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.trashContainer} onPress={() => deletePetProfile(pet.id)}>
                <Icon
                  name={Platform.OS === 'ios' ? 'ios-trash' : 'md-trash'}
                  size={28}
                  color={colors.blue}
                  style={{width: 25, marginRight: 8}}
                />
              </TouchableOpacity>
            </View>
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

PetProfile.propTypes = {
  myPets: PropTypes.object,
  currentNavigatorUID: PropTypes.string.isRequired
}

export default PetProfile;
