import Realm from 'realm';

const Temperament = {
  name: 'Temperament',
  properties: {
    temperament: 'string',
  }
}

const Owner = {
  name: 'Owner',
  properties: {
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
  properties: {
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

export const deletePetProfile = (petName) => {
  let pets = realm.objects('PetProfile');
  let pet = pets.filtered('id == $0', petName);
  realm.write(() => {
    realm.delete(pet);
  });
}

export const createPetProfile = (textInput, buttonInput) => {
  const tempers = buttonInput.temperaments.map(temper => {
    return {temperament: temper}
  });
  realm.write(() => {
    realm.create('PetProfile', {
      id: textInput.Name,
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
        name: textInput.OwnerName,
        phone: textInput.OwnerPhoneNumber1 ? textInput.OwnerPhoneNumber1+textInput.OwnerPhoneNumber2+textInput.OwnerPhoneNumber3 : '',
        email: textInput.OwnerEmailAddress,
        street: textInput.OwnerAddress,
        city: textInput.OwnerCity,
        province: textInput.OwnerProvince,
        postal: textInput.OwnerPostalCode,
      },
      owner2: {
        name: textInput.SecondaryName ? textInput.SecondaryName : '',
        phone: textInput.SecondaryPhoneNumber1 ? textInput.SecondaryPhoneNumber1+textInput.SecondaryPhoneNumber2+textInput.SecondaryPhoneNumber3 : '',
        email: textInput.SecondaryEmailAddress ? textInput.SecondaryEmailAddress : '',
        street: textInput.SecondaryAddress ? textInput.SecondaryAddress : '',
        city: textInput.SecondaryCity ? textInput.SecondaryCity : '',
        province: textInput.SecondaryProvince ? textInput.SecondaryProvince : '',
        postal: textInput.SecondaryPostalCode ? textInput.SecondaryPostalCode : ''
      },
      vet: {
        name: textInput.VetName ? textInput.VetName : '',
        hospital: textInput.VetHospital ? textInput.VetHospital : '',
        phone: textInput.VetPhoneNumber1 ? textInput.VetPhoneNumber1+textInput.VetPhoneNumber2+textInput.VetPhoneNumber3 : '',
        email: textInput.VetEmailAddress ? textInput.VetEmailAddress : '',
        street: textInput.VetAddress ? textInput.VetAddress : '',
        city: textInput.VetCity ? textInput.VetCity : '',
        province: textInput.VetProvince ? textInput.VetProvince : '',
        postal: textInput.VetPostalCode ? textInput.VetPostalCode : ''
      },
    });
  });
}

export const updatePetProfile = (textInput, buttonInput) => {
  const tempers = buttonInput.temperaments.map(temper => {
    return {temperament: temper}
  });
  realm.write(() => {
    realm.create('PetProfile', {
      id: textInput.Name,
      image: buttonInput.selectedImage,
      name: textInput.Name,
      age: textInput.Age,
      species: textInput.Species,
      breed: textInput.Breed,
      color: textInput.Color,
      sex: buttonInput.gender,
      neutered: buttonInput.spayed,
      temperInfo: textInput.Expand,
      features: textInput.DistinguishingFeatures,
      care: textInput.CareInstructions,
      medicalAlert: textInput.MedicalAlerts,
      microchip: 'hello',
      temperaments: tempers,
      owner1: {
        name: textInput.HumanName,
        phone: textInput.PhoneNumber1+textInput.PhoneNumber2+textInput.PhoneNumber3,
        email: textInput.EmailAddress,
        street: textInput.Address,
        city: textInput.City,
        province: textInput.Province,
        postal: textInput.PostalCode,
      },
      owner2: {
        name: textInput.HumanName,
        phone: textInput.PhoneNumber1+textInput.PhoneNumber2+textInput.PhoneNumber3,
        email: textInput.EmailAddress,
        street: textInput.Address,
        city: textInput.City,
        province: textInput.Province,
        postal: textInput.PostalCode
      },
      vet: {
        name: textInput.HumanName,
        hospital: 'Hospital',
        phone: textInput.PhoneNumber1+textInput.PhoneNumber2+textInput.PhoneNumber3,
        email: textInput.EmailAddress,
        street: textInput.Address,
        city: textInput.City,
        province: textInput.Province,
        postal: textInput.PostalCode
      },
    }, true);
  });
}
