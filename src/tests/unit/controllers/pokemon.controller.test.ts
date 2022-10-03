/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import PokemonModel from '../../../models/pokemon.model';
import ItemsModel from '../../../models/items.model';
import PokedexModel from '../../../models/pokedex.model';
import PokemonService from '../../../services/pokemon.service';
import { pokemonWithId, pokemonWithNameItemAndId } from '../../mocks/pokemon.mock';
import { itemWithId } from '../../mocks/item.mock';
import pokemonPartyMock from '../../mocks/pokemon.party.mock';
import PokemonController from '../../../controllers/pokemon.controller';

describe('Pokemon Controllers', () => {
  const pokemonModel = new PokemonModel();
  const itemsModel = new ItemsModel();
  const pokedexModel = new PokedexModel();
  const pokemonService = new PokemonService(pokemonModel, itemsModel, pokedexModel);
  const pokemonController = new PokemonController(pokemonService);
  // const message = `You used a MASTER BALL! 3... 2... 1...
  // Congratulations! You captured the pokémon!
  // Check your pokédex! ;)`;
  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(pokemonService, 'generatePokemon').resolves(pokemonWithId as any);
    sinon.stub(pokemonService, 'generateItem').resolves(itemWithId as any);
    sinon.stub(pokemonService, 'addPokemonItem').resolves(pokemonWithNameItemAndId);
    sinon.stub(pokemonService, 'addPokemonName').resolves(pokemonWithNameItemAndId);
    sinon.stub(pokemonService, 'capturePokemon').resolves(pokemonWithNameItemAndId);
    sinon.stub(pokemonService, 'checkPokedex').resolves(pokemonPartyMock);
    sinon.stub(pokemonService, 'removePokemonItem').resolves(pokemonWithId);
    sinon.stub(pokemonService, 'removeOneFromPokedex').resolves(pokemonPartyMock);
    sinon.stub(pokemonService, 'removeAllFromPokedex').resolves([]);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  describe('generating a Pokemon', () => {
    it('generatePokemon()', async () => {
      await pokemonController.generatePokemon(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });
  });

  describe('generating a Item', () => {
    it('generateItem()', async () => {
      await pokemonController.generateItem(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });
  });

  describe('add a partyName to a Pokemon', () => {
    it('addPokemonItem()', async () => {
      req.body = { newName: 'Pedrita' };
      await pokemonController.addPokemonItem(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });
  });

  describe('add a created item to a Pokemon', () => {
    it('addPokemonName()', async () => {
      await pokemonController.addPokemonName(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(pokemonWithNameItemAndId)).to.be.true;
    });
  });

  describe('add a created item to a Pokemon', () => {
    it('capturePokemon()', async () => {
      await pokemonController.capturePokemon(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    });
  });

  describe('if you can check your pokedex', () => {
    it('checkPokedex()', async () => {
      await pokemonController.checkPokedex(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });
  });

  describe('if you can remove a item from your pokemon', () => {
    it('removePokemonItem()', async () => {
      await pokemonController.removePokemonItem(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });
  });

  describe('if you can remove one pokemon from your pokedex', () => {
    it('removeOneFromPokedex()', async () => {
      req.params = { id: '62fd6e714adaf47c6e3f3656' };
      await pokemonController.removeOneFromPokedex(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(pokemonPartyMock)).to.be.true;
    });
  });

  describe('if you can remove all of your pokemons from the pokedex', () => {
    it('removeAllFromPokedex()', async () => {
      await pokemonController.removeAllFromPokedex(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });
  });
});
