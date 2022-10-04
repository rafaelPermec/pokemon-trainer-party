import { StatusCodes } from 'http-status-codes';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';
import { IPokemon } from '../interfaces/IPokemon';
import { IItems } from '../interfaces/IItems';
import { IPokedex } from '../interfaces/IPokedex';
import fetchRandomPokemon from '../helpers/pokemon.fetch.API';
import fetchRandomItems from '../helpers/item.fetch.API';
import HttpException from '../errors/http.exception';

class PokemonService implements IService<IPokemon | IItems | IPokedex> {
  private _pokemonModel: IModel<IPokemon>;

  private _itemModel: IModel<IItems>;

  private _pokedexModel: IModel<IPokedex>;

  constructor(
    pokemonModel: IModel<IPokemon>,
    itemModel: IModel<IItems>,
    pokedexModel: IModel<IPokedex>,
  ) {
    this._pokemonModel = pokemonModel;
    this._itemModel = itemModel;
    this._pokedexModel = pokedexModel;
  }

  public async generatePokemon(): Promise<IPokemon[]> {
    await this._pokemonModel.delete();

    const generateNewPokemon = await fetchRandomPokemon();

    await this._pokemonModel.create(generateNewPokemon);

    const findRandomPokemon = await this._pokemonModel.read();

    return findRandomPokemon;
  }

  public async generateItem(): Promise<IItems[]> {
    await this._itemModel.delete();

    const generateNewItem = await fetchRandomItems();

    await this._itemModel.create(generateNewItem);

    const findRandomItem = await this._itemModel.read();

    return findRandomItem;
  }

  public async capturePokemon(): Promise<IPokedex> {
    const [wildPokemon] = await this._pokemonModel.read();
    console.log(wildPokemon);

    const { image,
      level,
      partyName,
      pokedexId,
      size,
      specieName,
      status,
      types,
      heldItems } = wildPokemon;

    const pokemons = await this._pokedexModel.create({
      image,
      level,
      partyName,
      pokedexId,
      size,
      specieName,
      status,
      types,
      heldItems,
    });

    return pokemons;
  }

  public async checkPokedex(): Promise<IPokedex[]> {
    const pokemons = await this._pokedexModel.read();

    return pokemons;
  }

  public async removeOneFromPokedex(_id: string): Promise<IPokedex[]> {
    await this._pokedexModel.deleteById(_id);
    const pokemons = await this._pokedexModel.read();

    return pokemons;
  }

  public async removeAllFromPokedex(): Promise<IPokedex[]> {
    await this._pokedexModel.delete();
    const pokemons = await this._pokedexModel.read();

    return pokemons;
  }

  public async addPokemonName(newName: string): Promise<IPokemon> {
    const randomPokemon = await this._pokemonModel.read();
    const { heldItems,
      image,
      level,
      pokedexId,
      size,
      specieName,
      status,
      types,
      _id } = randomPokemon[0];

    if (!_id) {
      throw new HttpException(
        StatusCodes.FORBIDDEN,
        'No wild pokémon here! Go to /pokemon/generate',
      );
    }

    const addingName = await this._pokemonModel.update(_id as string, {
      pokedexId,
      level,
      partyName: newName,
      specieName,
      image,
      size,
      status,
      types,
      heldItems,
    });

    return addingName as IPokemon;
  }

  public async addPokemonItem(): Promise<IPokemon> {
    const randomPokemon = await this._pokemonModel.read();
    const randomItem = await this._itemModel.read();
    const { image,
      level,
      partyName,
      pokedexId,
      size,
      specieName,
      status,
      types,
      _id } = randomPokemon[0];
    const { itemName, quickEffect } = randomItem[0];

    if (!_id) {
      throw new HttpException(
        StatusCodes.FORBIDDEN,
        'No wild pokémon here! Go to /pokemon/generate',
      );
    }

    const addingItem = await this._pokemonModel.update(_id as string, {
      pokedexId,
      level,
      partyName,
      specieName,
      image,
      size,
      status,
      types,
      heldItems: [{ itemName, quickEffect }],
    });

    return addingItem as IPokemon;
  }

  public async removePokemonItem(): Promise<IPokemon> {
    const randomPokemon = await this._pokemonModel.read();
    const { image,
      level,
      partyName,
      pokedexId,
      size,
      specieName,
      status,
      types,
      _id } = randomPokemon[0];

    if (!_id) {
      throw new HttpException(
        StatusCodes.FORBIDDEN,
        'No wild pokémon here! Go to /pokemon/generate',
      );
    }

    const addingItem = await this._pokemonModel.update(_id as string, {
      pokedexId,
      level,
      partyName,
      specieName,
      image,
      size,
      status,
      types,
      heldItems: [],
    });

    return addingItem as IPokemon;
  }
}
export default PokemonService;
