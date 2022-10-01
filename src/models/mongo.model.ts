import { Model, isValidObjectId } from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import { IModel } from '../interfaces/IModel';
import HttpException from '../helpers/http.exception';

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

  public async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new HttpException(StatusCodes.BAD_REQUEST, 'Invalid id.');

    return this._model.findOne({ _id });
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new HttpException(StatusCodes.BAD_REQUEST, 'Invalid id.');

    return this._model.findByIdAndUpdate({ _id }, { ...obj }, { new: true });
  }

  public async delete(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new HttpException(StatusCodes.BAD_REQUEST, 'Invalid id.');

    return this._model.findByIdAndRemove({ _id });
  }
}

export default MongoModel;
