import { Router } from 'express';
import 'express-async-errors';
import PokemonModel from '../models/pokemon.model';
import ItemsModel from '../models/items.model';
import PokedexModel from '../models/pokedex.model';
import PokemonService from '../services/pokemon.service';
import PokemonController from '../controllers/pokemon.controller';

const route = Router();

const pokemonModel = new PokemonModel();
const itemModel = new ItemsModel();
const pokedexModel = new PokedexModel();
const pokemonService = new PokemonService(
  pokemonModel,
  itemModel,
  pokedexModel,
);
const pokemonController = new PokemonController(pokemonService);

route
  .get('/pokemon/generate', (req, res) => pokemonController.generatePokemon(req, res))
  .patch('/pokemon/add-party-name', (req, res) => pokemonController.addPokemonName(req, res));

route
  .get('/item/generate', (req, res) => pokemonController.generateItem(req, res))
  .patch('/item/add-item', (req, res) => pokemonController.addPokemonItem(req, res))
  .patch('/item/remove-item', (req, res) => pokemonController.removePokemonItem(req, res));

export default route;
