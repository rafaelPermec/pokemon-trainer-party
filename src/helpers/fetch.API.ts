import axios from 'axios';
import pokemonFactory from './pokemon.factory';

const fetchRandomPokemon = async () => {
  const pokemonID = Math.floor(Math.random() * 151);

  const fetch = await axios(
    `https://pokeapi.co/api/v2/pokemon/${pokemonID === 0 ? 1 : pokemonID}`,
  )
    .then((pokemon) => pokemon.data)
    .catch((e) => console.log(e));

  const { id, name, sprites, height, weight, stats, types } = fetch;
  const sprite = sprites.other.home.front_default;
  const pokemons = pokemonFactory(id, name, sprite, height, weight, stats, types);

  console.log(pokemons);

  return pokemons;
};

fetchRandomPokemon();

export default fetchRandomPokemon;
