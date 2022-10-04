import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IItems } from '../interfaces/IItems';
import MongoModel from './mongo.model';

const itemMongooseSchema = new Schema<IItems>({
  itemName: String,
  quickEffect: String,
}, { versionKey: false });

class Item extends MongoModel<IItems> {
  constructor(model = mongooseCreateModel('Items', itemMongooseSchema)) {
    super(model);
  }
}

export default Item;
