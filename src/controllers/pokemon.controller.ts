import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IService } from '../interfaces/IService';
import { IPokemon } from '../interfaces/IPokemon';
import { IItems } from '../interfaces/IItems';
import { IPokedex } from '../interfaces/IPokedex';
import HttpException from '../errors/http.exception';

export default class PokemonController {
  private _service: IService<IPokemon | IItems | IPokedex>;

  constructor(service: IService<IPokemon | IItems | IPokedex>) {
    this._service = service;
  }

  public async generatePokemon(
    _req: Request,
    res: Response<IPokemon[]>,
  ) {
    const results = await this._service.generatePokemon();
    if (!results) throw new HttpException(401, 'Pokémon not found.');
    return res.status(StatusCodes.OK).json(results as IPokemon[]);
  }

  public async generateItem(
    _req: Request,
    res: Response<IItems[]>,
  ) {
    const results = await this._service.generateItem();
    if (!results) throw new HttpException(401, 'Item not found.');
    return res.status(StatusCodes.OK).json(results as IItems[]);
  }

  public async addPokemonName(
    req: Request,
    res: Response<IPokemon>,
  ) {
    const { newName } = req.body;
    const results = await this._service.addPokemonName(newName);
    if (!results) throw new HttpException(401, 'We cant add this name to a pokémon');
    return res.status(StatusCodes.OK).json(results as IPokemon);
  }

  public async addPokemonItem(
    _req: Request,
    res: Response<IPokemon>,
  ) {
    const results = await this._service.addPokemonItem();
    if (!results) throw new HttpException(401, 'We cant add this item');
    return res.status(StatusCodes.OK).json(results as IPokemon);
  }

  public async removePokemonItem(
    _req: Request,
    res: Response<IPokemon>,
  ) {
    const results = await this._service.removePokemonItem();
    if (!results) throw new HttpException(401, 'We cant remove this item');
    return res.status(StatusCodes.OK).json(results as IPokemon);
  }

  public async capturePokemon(
    _req: Request,
    res: Response<{ message: string }>,
  ) {
    const results = await this._service.capturePokemon();
    if (!results) throw new HttpException(401, 'You cant capture this pokemon. Try again!');
    const message = `You used a MASTER BALL! 3... 2... 1...
    Congratulations! You captured the pokémon!
    Check your pokédex! ;)
    `;
    return res.status(StatusCodes.CREATED).json({ message });
  }

  public async checkPokedex(
    _req: Request,
    res: Response<IPokedex[]>,
  ) {
    const results = await this._service.checkPokedex();
    if (!results) throw new HttpException(401, 'You cant access your pokedex right now.');
    return res.status(StatusCodes.OK).json(results as any);
  }

  public async removeOneFromPokedex(
    req: Request,
    res: Response<IPokedex[]>,
  ) {
    const { id } = req.params;
    const results = await this._service.removeOneFromPokedex(id);
    if (!results) {
      throw new HttpException(
        StatusCodes.NOT_MODIFIED,
        'You dont release this pokemon.',
      );
    }
    return res.status(StatusCodes.OK).json(results as any);
  }

  public async removeAllFromPokedex(
    _req: Request,
    res: Response<IPokedex[]>,
  ) {
    const results = await this._service.removeAllFromPokedex();
    if (!results) {
      throw new HttpException(
        StatusCodes.NOT_MODIFIED,
        'You dont release all of your pokemons',
      );
    }
    return res.status(StatusCodes.OK).json(results as any);
  }
}
