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
    phone: 'int',
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
    phone: 'int',
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
    id: 'int',
    image: 'string',
    name: 'string',
    age: 'int',
    species: 'string',
    breed: 'string',
    color: 'string',
    sex: 'string',
    neutered: 'bool',
    temperaments: {type: 'list', objectType: 'Temperament'},
    temperInfo: 'string',
    features: 'string',
    care: 'string',
    medicalAlert: 'string',
    microchip: 'string',
    owners: {type: 'list', objectType: 'Owner'},
    vet: 'Vet',
  }
}

let realm = new Realm({schema: [Temperament, PetProfile, Owner, Vet]});
