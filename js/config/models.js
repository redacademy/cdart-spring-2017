import Realm from 'realm';

const Temperament = {
  name: 'Temperament',
  properties: {
    temperament: 'string',
  }
}

const Owner = {
  name: 'Owner',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    phone: 'string',
    email: 'string',
    street: 'string',
    city: 'string',
    province: 'string',
    postal: 'string',
  }
}

const Vet = {
  name: 'Vet',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    hospital: 'string',
    phone: 'string',
    email: 'string',
    street: 'string',
    city: 'string',
    province: 'string',
    postal: 'string',
  }
}

const PetProfile = {
  name: 'PetProfile',
  primaryKey: 'id',
  properties: {
    id: 'string',
    image: 'string',
    name: 'string',
    age: 'string',
    species: 'string',
    breed: 'string',
    color: 'string',
    sex: 'string',
    neutered: 'string',
    temperaments: {type: 'list', objectType: 'Temperament'},
    temperInfo: 'string',
    features: 'string',
    care: 'string',
    medicalAlert: 'string',
    microchip: 'string',
    owner1: 'Owner',
    owner2: 'Owner',
    vet: 'Vet',
  }
}

let realm = new Realm({schema: [Temperament, PetProfile, Owner, Vet]});

console.log('the path is: ', realm.path);

export const queryPetProfiles = () => {
  const profiles = realm.objects('PetProfile');
  const profileKeys = Object.keys(profiles);
  const profileArray = profileKeys.reduce( (acc, key, i) => {
    acc.push( profiles[i] );
    return acc;
  }, []);
  return profileArray;
}

export const deletePetProfile = (id) => {
  let pets = realm.objects('PetProfile');
  let pet = pets.filtered('id == $0', id);
  realm.write(() => {
    realm.delete(pet);
  });
}

export const createPetProfile = (textInput, buttonInput, id) => {
  const tempers = buttonInput.temperaments.map(temper => {
    return {temperament: temper}
  });
  realm.write(() => {
    realm.create('PetProfile', {
      id: id,
      image: buttonInput.selectedImage,
      name: textInput.Name,
      age: textInput.Age,
      species: textInput.Species,
      breed: textInput.Breed,
      color: textInput.Color,
      sex: buttonInput.gender,
      neutered: buttonInput.spayed,
      temperInfo: textInput.Expand ? textInput.Expand : '',
      features: textInput.DistinguishingFeatures ? textInput.DistinguishingFeatures : '',
      care: textInput.CareInstructions ? textInput.CareInstructions : '',
      medicalAlert: textInput.MedicalAlerts ? textInput.MedicalAlerts : '',
      microchip: textInput.Microchip ? textInput.Microchip : '',
      temperaments: tempers,
      owner1: {
        id: id,
        name: textInput.OwnerName ? textInput.OwnerName : '',
        phone: textInput.OwnerPhoneNumber1 ? textInput.OwnerPhoneNumber1+textInput.OwnerPhoneNumber2+textInput.OwnerPhoneNumber3 : '',
        email: textInput.OwnerEmailAddress ? textInput.OwnerEmailAddress : '',
        street: textInput.OwnerAddress ? textInput.OwnerAddress : '',
        city: textInput.OwnerCity ? textInput.OwnerCity : '',
        province: textInput.OwnerProvince ? textInput.OwnerProvince : '',
        postal: textInput.OwnerPostalCode ? textInput.OwnerPostalCode : '',
      },
      owner2: {
        id: id+'owner2',
        name: textInput.SecondaryName ? textInput.SecondaryName : '',
        phone: textInput.SecondaryPhoneNumber1 ? textInput.SecondaryPhoneNumber1+textInput.SecondaryPhoneNumber2+textInput.SecondaryPhoneNumber3 : '',
        email: textInput.SecondaryEmailAddress ? textInput.SecondaryEmailAddress : '',
        street: textInput.SecondaryAddress ? textInput.SecondaryAddress : '',
        city: textInput.SecondaryCity ? textInput.SecondaryCity : '',
        province: textInput.SecondaryProvince ? textInput.SecondaryProvince : '',
        postal: textInput.SecondaryPostalCode ? textInput.SecondaryPostalCode : ''
      },
      vet: {
        id: id,
        name: textInput.VetName ? textInput.VetName : '',
        hospital: textInput.VetHospital ? textInput.VetHospital : '',
        phone: textInput.VetPhoneNumber1 ? textInput.VetPhoneNumber1+textInput.VetPhoneNumber2+textInput.VetPhoneNumber3 : '',
        email: textInput.VetEmailAddress ? textInput.VetEmailAddress : '',
        street: textInput.VetAddress ? textInput.VetAddress : '',
        city: textInput.VetCity ? textInput.VetCity : '',
        province: textInput.VetProvince ? textInput.VetProvince : '',
        postal: textInput.VetPostalCode ? textInput.VetPostalCode : ''
      },
    }, true);
  });
}
