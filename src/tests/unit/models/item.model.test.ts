import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ItemModel from '../../../models/items.model';
import { itemWithId, itemWithoutId } from '../../mocks/item.mock';

describe('Items Model', () => {
  const itemModel = new ItemModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(itemWithId);
    sinon.stub(Model, 'find').resolves(itemWithId as any);
    sinon.stub(Model, 'findByIdAndRemove').resolves([]);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a Item', () => {
    it('successfully created', async () => {
      const newItem = await itemModel.create(itemWithoutId[0]);
      expect(newItem).to.be.deep.equal(itemWithId);
    });
  });

  describe('searching a Item', () => {
    it('successfully found', async () => {
      const itemsFound = await itemModel.read();
      expect(itemsFound).to.be.deep.equal(itemWithId);
    });
  });

  describe('deleting a Item by id', () => {
    it('successfully found', async () => {
      const itemDeleted = await itemModel.deleteById('62cf1fc6498565d94eba52cd');
      expect(itemDeleted).to.be.deep.equal([]);
    });
  });
});
