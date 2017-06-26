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

export const updatePetProfile = (textInput, buttonInput, data, id) => {
  const tempers = data.temperaments.map(temper => {
    return { temperament: temper.temperament }
  });
  realm.write(() => {
    realm.create('PetProfile', {
      id: id,
      image: buttonInput.selectedImage ? buttonInput.selectedImage : data.image,
      name: textInput.Name ? textInput.Name : data.name,
      age: textInput.Age ? textInput.Name : data.name,
      species: textInput.Species ? textInput.Species : data.species,
      breed: textInput.Breed ? textInput.Breed : data.breed,
      color: textInput.Color ? textInput.Color : data.color,
      sex: buttonInput.gender ? buttonInput.gender : data.sex,
      neutered: buttonInput.spayed ? buttonInput.spayed : data.neutered,
      temperInfo: textInput.Expand ? textInput.Expand : data.temperInfo,
      features: textInput.DistinguishingFeatures ? textInput.DistinguishingFeatures : data.features,
      care: textInput.CareInstructions ? textInput.CareInstructions : data.care,
      medicalAlert: textInput.MedicalAlerts ? textInput.MedicalAlerts : data.medicalAlert,
      microchip: textInput.Microchip ? textInput.Microchip : data.microchip,
      temperaments: tempers,
      owner1: {
        id: id,
        name: textInput.OwnerName ? textInput.OwnerName : data.owner1.name,
        phone: textInput.OwnerPhoneNumber1 ? textInput.OwnerPhoneNumber1+textInput.OwnerPhoneNumber2+textInput.OwnerPhoneNumber3 : data.owner1.phone,
        email: textInput.OwnerEmailAddress ? textInput.OwnerEmailAddress : data.owner1.email,
        street: textInput.OwnerAddress ? textInput.OwnerAddress : data.owner1.street,
        city: textInput.OwnerCity ? textInput.OwnerCity : data.owner1.city,
        province: textInput.OwnerProvince ? textInput.OwnerProvince : data.owner1.province,
        postal: textInput.OwnerPostalCode ? textInput.OwnerPostalCode : data.owner1.postal,
      },
      owner2: {
        id: id+'owner2',
        name: textInput.SecondaryName ? textInput.SecondaryName : data.owner2.name,
        phone: textInput.SecondaryPhoneNumber1 ? textInput.SecondaryPhoneNumber1+textInput.SecondaryPhoneNumber2+textInput.SecondaryPhoneNumber3 : data.owner2.phone,
        email: textInput.SecondaryEmailAddress ? textInput.SecondaryEmailAddress : data.owner2.email,
        street: textInput.SecondaryAddress ? textInput.SecondaryAddress : data.owner2.street,
        city: textInput.SecondaryCity ? textInput.SecondaryCity : data.owner2.city,
        province: textInput.SecondaryProvince ? textInput.SecondaryProvince : data.owner2.province,
        postal: textInput.SecondaryPostalCode ? textInput.SecondaryPostalCode : data.owner2.postal
      },
      vet: {
        id: id,
        name: textInput.VetName ? textInput.VetName : data.vet.name,
        hospital: textInput.VetHospital ? textInput.VetHospital : data.vet.hospital,
        phone: textInput.VetPhoneNumber1 ? textInput.VetPhoneNumber1+textInput.VetPhoneNumber2+textInput.VetPhoneNumber3 : data.vet.phone,
        email: textInput.VetEmailAddress ? textInput.VetEmailAddress : data.vet.email,
        street: textInput.VetAddress ? textInput.VetAddress : data.vet.street,
        city: textInput.VetCity ? textInput.VetCity : data.vet.city,
        province: textInput.VetProvince ? textInput.VetProvince : data.vet.province,
        postal: textInput.VetPostalCode ? textInput.VetPostalCode : data.vet.postal
      },
    }, true);
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
