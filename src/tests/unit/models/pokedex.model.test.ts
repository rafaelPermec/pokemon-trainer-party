import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
// import {  } from '../../../models';
import {
  pokemonWithId,
  pokemonWithoutId,
  pokemonWithNameItemAndId,
} from '../../mocks/pokemon.mock';

describe('Pokemon Model', () => {
  const pokemonModel = new PokemonModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(pokemonWithId);
    sinon.stub(Model, 'find').resolves(pokemonWithoutId[]);
    sinon.stub(Model, 'findOne').resolves(pokemonWithoutId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(pokemonWithNameItemAndId);
    sinon.stub(Model, 'findByIdAndRemove').resolves(pokemonWithNameItemAndId);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a Pokemon', () => {
    it('successfully created', async () => {
      const newPokemon = await pokemonModel.create(pokemonWithoutId);
      expect(newPokemon).to.be.deep.equal(pokemonWithId);
    });
  });

  describe('searching a Pokemon', () => {
    it('successfully found', async () => {
      const pokemonsFound = await pokemonModel.read();
      expect(pokemonsFound).to.be.deep.equal(pokemonWithoutId);
    });
  });

  describe('searching a Pokemon by id', () => {
    it('successfully found', async () => {
      const pokemonFound = await pokemonModel.readOne('62cf1fc6498565d94eba52cd');
      expect(pokemonFound).to.be.deep.equal(pokemonWithoutId);
    });

    it('_id not found', async () => {
      try {
        await pokemonModel.readOne('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('updating a Pokemon by id', () => {
    it('successfully found', async () => {
      const pokemonDeleted = await pokemonModel.update('62cf1fc6498565d94eba52cd', 'Pedrita');
      expect(pokemonDeleted).to.be.deep.equal(pokemonWithNameItemAndId);
    });

    it('_id not found', async () => {
      try {
        await pokemonModel.update('123ERRADO', 'Pedrita');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('deleting a Pokemon by id', () => {
    it('successfully found', async () => {
      const pokemonDeleted = await pokemonModel.delete('62cf1fc6498565d94eba52cd');
      expect(pokemonDeleted).to.be.deep.equal(pokemonWithNameItemAndId);
    });

    it('_id not found', async () => {
      try {
        await pokemonModel.delete('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });
});
