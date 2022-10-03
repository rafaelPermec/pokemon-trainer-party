import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IService } from '../interfaces/IService';
import { IPokemon } from '../interfaces/IPokemon';
import { IItems } from '../interfaces/IItems';
import IPokedex from '../interfaces/IPokedex';
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
}
