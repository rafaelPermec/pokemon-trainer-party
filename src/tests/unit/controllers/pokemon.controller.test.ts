// import { expect } from 'chai';
// import * as sinon from 'sinon';
// import { Request, Response } from 'express';
// // import {  } from '../../../models/';
// // import {  } from '../../../services/';
// // import {  } from '../../../controllers/';
// import {
//   pokemonWithId,
//   pokemonWithoutId,
//   pokemonWithNameItemAndId,
// } from '../../mocks/pokemon.mock';

// describe('Pokemon Service', () => {
//   const pokemonModel = new PokemonModel();
//   const pokemonService = new PokemonService(pokemonModel);
//   const pokemonController = new PokemonController(pokemonModel);
//   const req = {} as Request;
//   const res = {} as Response;

//   before(() => {
//     sinon.stub(pokemonService, 'create').resolves(pokemonWithId);
//     sinon.stub(pokemonService, 'find').resolves(pokemonWithoutId);
//     sinon.stub(pokemonService, 'findOne').resolves(pokemonWithoutId);
//     sinon.stub(pokemonService, 'findByIdAndUpdate').resolves(pokemonWithNameItemAndId);
//     sinon.stub(pokemonService, 'findByIdAndRemove').resolves(pokemonWithNameItemAndId);

//     res.status = sinon.stub().returns(res);
//     res.json = sinon.stub().returns(res);
//   });

//   after(() => {
//     sinon.restore();
//   });

//   describe('creating a Pokemon', () => {
//     it('successfully created', async () => {
//       req.body = pokemonWithoutId;
//       await pokemonController.create(req, res);
//       expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
//       expect((res.json as sinon.SinonStub).calledWith(pokemonWithoutId)).to.be.true;
//     });
//   });

//   describe('searching a Pokemon', () => {
//     it('successfully found', async () => {
//       await pokemonController.find(req, res);

//       expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
//     });
//   });

//   describe('searching a Pokemon by id', () => {
//     it('successfully found', async () => {
//       req.params = { id: pokemonWithId._id };
//       await pokemonController.findOne(req, res);

//       expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
//       expect((res.json as sinon.SinonStub).calledWith(pokemonWithId._id)).to.be.true;
//     });
//   });

//   describe('updating a Pokemon by id', () => {
//     it('successfully found', async () => {
//       req.params = { id: pokemonWithId._id };
//       req.body = { partyName: pokemonWithId.partyName };
//       await pokemonController.update(req, res);

//       expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
//       expect((res.json as sinon.SinonStub).calledWith(pokemonWithId._id)).to.be.true;
//     });
//   });

//   describe('deleting a Pokemon by id', () => {
//     it('successfully found', async () => {
//       req.params = { id: pokemonWithId._id };
//       await pokemonController.delete(req, res);

//       expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
//       expect((res.json as sinon.SinonStub).calledWith(pokemonWithId._id)).to.be.true;
//     });
//   });
// });
