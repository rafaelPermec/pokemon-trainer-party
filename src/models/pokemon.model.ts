import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IPokemon } from '../interfaces/IPokemon';
import MongoModel from './mongo.model';

const pokemonMongooseSchema = new Schema<IPokemon>({
  pokedexId: Number,
  level: Number,
  partyName: String,
  specieName: String,
  image: String,
  size: Object,
  status: Array,
  types: Array,
  heldItems: Array,
}, { versionKey: false });

class Pokemon extends MongoModel<IPokemon> {
  constructor(model = mongooseCreateModel('Pokemon', pokemonMongooseSchema)) {
    super(model);
  }
}

export default Pokemon;
