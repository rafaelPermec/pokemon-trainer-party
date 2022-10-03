import { isValidObjectId, Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/error.catalog';

abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async read(): Promise<T[]> {
    return this._model.find();
  }

  public async readById(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);

    return this._model.findOne({ _id });
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);

    return this._model.findByIdAndUpdate({ _id }, { ...obj }, { new: true });
  }

  public async delete(): Promise<void> {
    await this._model.deleteMany();
  }

  public async deleteById(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);

    return this._model.findByIdAndRemove({ _id });
  }
}

export default MongoModel;
