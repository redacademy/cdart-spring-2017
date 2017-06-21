import Realm from 'realm';

const Temperament = {
  name: 'Temperament',
  properties: {

  }
}

const PetProfile = {
  name: 'PetProfile',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    age: 'int',
    species: 'string',
    breed: 'string',
    color: 'string',
    sex: 'string',
    neutered: 'bool',
    temperament: 'string',
    features: 'string',

  }
}
