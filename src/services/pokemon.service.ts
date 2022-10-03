import { IModel } from '../interfaces/IModel';
import { IPokemon, pokemonZodSchema } from '../interfaces/IPokemon';
import { ErrorTypes } from '../errors/error.catalog';

class PokemonService implements IModel<IPokemon> {
  private _frame: IModel<IPokemon>;

  constructor(model: IModel<IPokemon>) {
    this._frame = model;
  }

  public async create(obj: IPokemon): Promise<IPokemon> {
    const parsed = pokemonZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._frame.create(obj);
  }

  public async read(): Promise<IPokemon[]> {
    const cars = await this._frame.read();
    if (!cars) throw new Error(ErrorTypes.EntityNotFound);
    return cars;
  }

  public async readOne(_id: string): Promise<IPokemon> {
    const car = await this._frame.readOne(_id);
    if (!car) throw new Error(ErrorTypes.EntityNotFound);
    return car;
  }

  public async update(_id: string, obj: IPokemon): Promise<IPokemon> {
    const carUpdated = await this._frame.update(_id, obj);
    if (!carUpdated) throw new Error(ErrorTypes.EntityNotFound);
    return carUpdated;
  }

  public async delete(_id: string): Promise<IPokemon> {
    const carDeleted = await this._frame.delete(_id);
    if (!carDeleted) throw new Error(ErrorTypes.EntityNotFound);
    return carDeleted;
  }
}

export default PokemonService;
