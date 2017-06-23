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

export const queryPetProfiles = () => {
  let profiles = realm.objects('PetProfile');
  console.log(profiles);
  return profiles;
}

export const createPetProfile = (textInput, buttonInput) => {
  const tempers = buttonInput.temperaments.map(temper => {
    return {temperament: temper}
  });
  realm.write(() => {
    realm.create('PetProfile', {
      id: textInput.Name,
      image: 'Hello It\'s me',
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
    });
  });
}
