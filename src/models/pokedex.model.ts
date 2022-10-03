import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IPokedex } from '../interfaces/IPokedex';
import MongoModel from './mongo.model';

const pokedexMongooseSchema = new Schema<IPokedex>({
  pokedexId: Number,
  level: Number,
  partyName: String,
  specieName: String,
  image: String,
  size: Object,
  status: Array,
  types: Array,
  heldItems: Array,
}, { versionKey: false, autoIndex: false });

class Pokedex extends MongoModel<IPokedex> {
  constructor(model = mongooseCreateModel('Pokedex', pokedexMongooseSchema)) {
    super(model);
  }
}

export default Pokedex;
