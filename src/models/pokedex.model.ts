import { model as mongooseCreateModel, Schema } from 'mongoose';
import IPokedex from '../interfaces/IPokedex';
import MongoModel from './mongo.model';

const pokedexMongooseSchema = new Schema<IPokedex>({
  pokedex: Array,
}, { versionKey: false });

class Pokedex extends MongoModel<IPokedex> {
  constructor(model = mongooseCreateModel('Pokedex', pokedexMongooseSchema)) {
    super(model);
  }
}

export default Pokedex;
