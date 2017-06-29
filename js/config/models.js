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
    name: {type: 'string', optional: true},
    phone: {type: 'string', optional: true},
    email: {type: 'string', optional: true},
    street: {type: 'string', optional: true},
    city: {type: 'string', optional: true},
    province: {type: 'string', optional: true},
    postal: {type: 'string', optional: true},
  }
}

const Vet = {
  name: 'Vet',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: {type: 'string', optional: true},
    hospital: {type: 'string', optional: true},
    phone: {type: 'string', optional: true},
    email: {type: 'string', optional: true},
    street: {type: 'string', optional: true},
    city: {type: 'string', optional: true},
    province: {type: 'string', optional: true},
    postal: {type: 'string', optional: true},
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
    temperInfo: {type: 'string', optional: true},
    features: {type: 'string', optional: true},
    care: {type: 'string', optional: true},
    medicalAlert: {type: 'string', optional: true},
    microchip: {type: 'string', optional: true},
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
  let tempers = [];
  if(!textInput) textInput = {};
  if(!buttonInput) buttonInput = {};
  if(buttonInput.temperaments.length){
    tempers = buttonInput.temperaments.map(temper => {
      return { temperament: temper }
    });
    console.log(tempers)
  } else {
    tempers = data.temperaments.map(temper => {
      return { temperament: temper.temperament }
    });
  }
  realm.write(() => {
    realm.create('PetProfile', {
      id: id,
      image: buttonInput.selectedImage ? buttonInput.selectedImage : data.image,
      name: textInput.Name ? textInput.Name : data.name,
      age: textInput.Age ? textInput.Age : data.age,
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
      neutered: buttonInput.spayed ? buttonInput.spayed : null,
      temperInfo: textInput.Expand ? textInput.Expand : null,
      features: textInput.DistinguishingFeatures ? textInput.DistinguishingFeatures : null,
      care: textInput.CareInstructions ? textInput.CareInstructions : null,
      medicalAlert: textInput.MedicalAlerts ? textInput.MedicalAlerts : null,
      microchip: textInput.Microchip ? textInput.Microchip : null,
      temperaments: tempers,
      owner1: {
        id: id,
        name: textInput.OwnerName ? textInput.OwnerName : null,
        phone: textInput.OwnerPhoneNumber1 ? textInput.OwnerPhoneNumber1+textInput.OwnerPhoneNumber2+textInput.OwnerPhoneNumber3 : null,
        email: textInput.OwnerEmailAddress ? textInput.OwnerEmailAddress : null,
        street: textInput.OwnerAddress ? textInput.OwnerAddress : null,
        city: textInput.OwnerCity ? textInput.OwnerCity : null,
        province: textInput.OwnerProvince ? textInput.OwnerProvince : null,
        postal: textInput.OwnerPostalCode ? textInput.OwnerPostalCode : null,
      },
      owner2: {
        id: id+'owner2',
        name: textInput.SecondaryName ? textInput.SecondaryName : null,
        phone: textInput.SecondaryPhoneNumber1 ? textInput.SecondaryPhoneNumber1+textInput.SecondaryPhoneNumber2+textInput.SecondaryPhoneNumber3 : null,
        email: textInput.SecondaryEmailAddress ? textInput.SecondaryEmailAddress : null,
        street: textInput.SecondaryAddress ? textInput.SecondaryAddress : null,
        city: textInput.SecondaryCity ? textInput.SecondaryCity : null,
        province: textInput.SecondaryProvince ? textInput.SecondaryProvince : null,
        postal: textInput.SecondaryPostalCode ? textInput.SecondaryPostalCode : null
      },
      vet: {
        id: id,
        name: textInput.VetName ? textInput.VetName : null,
        hospital: textInput.VetHospital ? textInput.VetHospital : null,
        phone: textInput.VetPhoneNumber1 ? textInput.VetPhoneNumber1+textInput.VetPhoneNumber2+textInput.VetPhoneNumber3 : null,
        email: textInput.VetEmailAddress ? textInput.VetEmailAddress : null,
        street: textInput.VetAddress ? textInput.VetAddress : null,
        city: textInput.VetCity ? textInput.VetCity : null,
        province: textInput.VetProvince ? textInput.VetProvince : null,
        postal: textInput.VetPostalCode ? textInput.VetPostalCode : null
      },
    }, true);
  });
}

export default realm;
