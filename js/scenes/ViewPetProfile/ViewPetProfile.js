import React from 'react';
import { PropTypes } from 'prop-types';

import { styles } from './styles';

import {
  ScrollView,
  View,
  Image,
  Text
} from 'react-native';

import ContactInfoDisplay from '../../components/ContactInfoDisplay';
import MicrochipNumDisplay from '../../components/MicrochipNumDisplay';

const ViewProfile = ({ petInfo }) => {
  const selectedTemperaments = petInfo.temperaments.map(temperament => {
      return temperament.temperament;
    });
    console.log(petInfo);
  return (
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
            selectedTemperaments.includes('Friendly')
              ? <View style={ styles.selectedTemperamentBubble }>
                  <Text style={ styles.selectedTemperamentText }>
                    Friendly
                  </Text>
                </View>
              : <View style={ styles.temperamentBubble }>
                  <Text style={ styles.temperamentText }>
                    Friendly
                  </Text>
                </View>
          }

          {
            selectedTemperaments.includes('Energetic')
              ? <View style={ styles.selectedTemperamentBubble }>
                  <Text style={ styles.selectedTemperamentText }>
                    Energetic
                  </Text>
                </View>
              : <View style={ styles.temperamentBubble }>
                  <Text style={ styles.temperamentText }>
                    Energetic
                  </Text>
                </View>
          }

          {
            selectedTemperaments.includes('Timid')
              ? <View style={ styles.selectedTemperamentBubble }>
                  <Text style={ styles.selectedTemperamentText }>
                    Timid
                  </Text>
                </View>
              : <View style={ styles.temperamentBubble }>
                  <Text style={ styles.temperamentText }>
                    Timid
                  </Text>
                </View>
          }

          {
            selectedTemperaments.includes('Aggressive')
              ? <View style={ styles.selectedTemperamentBubble }>
                  <Text style={ styles.selectedTemperamentText }>
                    Aggressive
                  </Text>
                </View>
              : <View style={ styles.temperamentBubble }>
                  <Text style={ styles.temperamentText }>
                    Aggressive
                  </Text>
                </View>
          }

          {
            selectedTemperaments.includes('Obedient')
              ? <View style={ styles.selectedTemperamentBubble }>
                  <Text style={ styles.selectedTemperamentText }>
                    Obedient
                  </Text>
                </View>
              : <View style={ styles.temperamentBubble }>
                  <Text style={ styles.temperamentText }>
                    Obedient
                  </Text>
                </View>
          }

        </View>

        <View style={ styles.textInfoSection }>
        { petInfo.temperInfo ?
          <View style={ styles.blueTextArea }>
            <Text style={ styles.blueTextAreaText }>{ petInfo.temperInfo }</Text>
          </View>:
          <View style={ styles.blueTextArea }>
            <Text style={ styles.blueTextAreaText }>N/A</Text>
          </View>
        }
          <View style={ styles.whiteTextArea }>
            <Text style={ styles.sectionHeader }>Distinguishing Features</Text>
          </View>
        { petInfo.features ?
          <View style={ styles.blueTextArea }>
            <Text style={ styles.blueTextAreaText }>{ petInfo.features }</Text>
          </View>:
          <View style={ styles.blueTextArea }>
            <Text style={ styles.blueTextAreaText }>N/A</Text>
          </View>
        }
          <View style={ styles.whiteTextArea }>
            <Text style={ styles.sectionHeader }>Care Instructions</Text>
          </View>
        { petInfo.care ?
          <View style={ styles.blueTextArea }>
            <Text style={ styles.blueTextAreaText }>{ petInfo.care }</Text>
          </View>:
          <View style={ styles.blueTextArea }>
            <Text style={ styles.blueTextAreaText }>N/A</Text>
          </View>
        }
          <View style={ styles.whiteTextArea }>
            <Text style={ styles.sectionHeader }>Medical Alerts</Text>
          </View>
        { petInfo.medicalAlert ?
          <View style={ styles.blueTextArea }>
            <Text style={ styles.blueTextAreaText }>{ petInfo.medicalAlert }</Text>
          </View>:
          <View style={ styles.blueTextArea }>
            <Text style={ styles.blueTextAreaText }>N/A</Text>
          </View>
        }
        </View>


        {
          petInfo.microchip && <MicrochipNumDisplay title='Microchip #' info={ petInfo.microchip } />
        }

        {
          petInfo.owner1.name &&<ContactInfoDisplay title='Owner Contact' info={ petInfo.owner1 } />
        }
        {
          petInfo.vet.name || petInfo.vet.hospital && <ContactInfoDisplay title='Veterinarian Contact' info={ petInfo.vet } />
        }
        {
          petInfo.owner2.name && <ContactInfoDisplay title='Secondary Contact' info={ petInfo.owner2 } />
        }
      </View>
    </ScrollView>
  )
};


ViewProfile.propTypes = {
  petInfo: PropTypes.object.isRequired
}

export default ViewProfile;
