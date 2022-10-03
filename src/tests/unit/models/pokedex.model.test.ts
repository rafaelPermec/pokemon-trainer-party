import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import PokedexModel from '../../../models/pokedex.model';
import {
  pokemonWithId,
  pokemonWithoutId,
  pokemonWithNameItemAndId,
} from '../../mocks/pokemon.mock';
import pokemonPartyMock from '../../mocks/pokemon.party.mock';

describe('Pokedex Model', () => {
  const pokedexModel = new PokedexModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(pokemonWithId);
    sinon.stub(Model, 'find').resolves(pokemonPartyMock as any);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(pokemonWithNameItemAndId);
    sinon.stub(Model, 'findByIdAndRemove').resolves(pokemonWithNameItemAndId);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a Pokedex', () => {
    it('successfully created', async () => {
      const newPokemon = await pokedexModel.create(pokemonWithoutId);
      expect(newPokemon).to.be.deep.equal(pokemonWithId);
    });
  });

  describe('searching a Pokedex', () => {
    it('successfully found', async () => {
      const pokemonsFound = await pokedexModel.read();
      expect(pokemonsFound).to.be.deep.equal(pokemonPartyMock);
    });
  });

  describe('updating a Pokedex by id', () => {
    it('successfully found', async () => {
      const pokemonDeleted = await pokedexModel.update(
        '62cf1fc6498565d94eba52cd',
        { partyName: 'Pedrita' },
      );
      expect(pokemonDeleted).to.be.deep.equal(pokemonWithNameItemAndId);
    });

    it('_id not found', async () => {
      try {
        await pokedexModel.update('123ERRADO', { partyName: 'Pedrita' });
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('deleting a Pokedex by id', () => {
    it('successfully found', async () => {
      const pokemonDeleted = await pokedexModel.deleteById('62cf1fc6498565d94eba52cd');
      expect(pokemonDeleted).to.be.deep.equal(pokemonWithNameItemAndId);
    });

    it('_id not found', async () => {
      try {
        await pokedexModel.deleteById('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });
});
