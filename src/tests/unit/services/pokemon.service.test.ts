import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
// import {  } from '../../../models';
// import {  } from '../../../services';
import { ZodError } from 'zod';
import {
  pokemonWithId,
  pokemonWithoutId,
  pokemonWithNameItemAndId,
} from '../../mocks/pokemon.mock';
import { ErrorTypes } from '../../../errors/error.catalog';

describe('Pokemon Service', () => {
  const pokemonModel = new PokemonModel();
  const pokemonService = new PokemonService(pokemonModel);

  before(() => {
    sinon.stub(Model, 'create').resolves(pokemonWithId);
    sinon.stub(Model, 'find').resolves(pokemonWithoutId);
    sinon.stub(Model, 'findOne')
      .onCall(0)
      .resolves(pokemonWithoutId)
      .onCall(1)
      .resolves(null);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(pokemonWithNameItemAndId);
    sinon.stub(Model, 'findByIdAndRemove').resolves(pokemonWithNameItemAndId);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a Pokemon', () => {
    it('successfully created', async () => {
      const newPokemon = await pokemonService.create(pokemonWithoutId);
      expect(newPokemon).to.be.deep.equal(pokemonWithId);
    });
    it('Failure', async () => {
      try {
        await pokemonService.create({} as any);
      } catch (error) {
        expect(error).to.be.instanceOf(ZodError);
      }
    });
  });

  describe('searching a Pokemon', () => {
    it('successfully found', async () => {
      const pokemonsFound = await pokemonService.find();
      expect(pokemonsFound).to.be.deep.equal(pokemonWithoutId);
    });
  });

  describe('searching a Pokemon by id', () => {
    it('successfully found', async () => {
      const pokemonFound = await pokemonService.findOne('62cf1fc6498565d94eba52cd');
      expect(pokemonFound).to.be.deep.equal(pokemonWithoutId);
    });

    it('Failure', async () => {
      try {
        await pokemonService.findOne('123xablau');
      } catch (error: any) {
        expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
  });

  describe('updating a Pokemon by id', () => {
    it('successfully found', async () => {
      const pokemonDeleted = await pokemonService.update('62cf1fc6498565d94eba52cd', 'Pedrita');
      expect(pokemonDeleted).to.be.deep.equal(pokemonWithNameItemAndId);
    });

    it('Failure', async () => {
      try {
        await pokemonService.update('123xablau', 'Pedrita');
      } catch (error: any) {
        expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
  });

  describe('deleting a Pokemon by id', () => {
    it('successfully found', async () => {
      const pokemonDeleted = await pokemonService.delete('62cf1fc6498565d94eba52cd');
      expect(pokemonDeleted).to.be.deep.equal(pokemonWithNameItemAndId);
    });

    it('Failure', async () => {
      try {
        await pokemonService.delete('123xablau');
      } catch (error: any) {
        expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
  });
});
