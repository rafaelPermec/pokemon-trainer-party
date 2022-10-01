import axios from 'axios';

const fetchRandomPokemon = () => {
  const pokemonID = Math.floor((Math.random() * 10) * 151);
  const fetch = axios(` https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
  console.log(fetch);
};

fetchRandomPokemon();

export default fetchRandomPokemon;
