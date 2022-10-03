import { pokeBuildStdout } from '../../interfaces/IPokemon';

const pokemonWithoutId: pokeBuildStdout = {
  pokedexId: 76,
  level: 53,
  partyName: '',
  specieName: 'Golem',
  // Descrição da URL de imagem:
  // eslint-disable-next-line max-len
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/76.png',
  size: { height: 14, weight: 3000 },
  status: [
    { stat: 'Hp', value: 101 },
    { stat: 'Attack', value: 141 },
    { stat: 'Defense', value: 151 },
    { stat: 'Special-attack', value: 76 },
    { stat: 'Special-defense', value: 86 },
    { stat: 'Speed', value: 66 },
  ],
  types: ['Rock', 'Ground'],
  heldItems: [],
};

const pokemonWithId: pokeBuildStdout & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  pokedexId: 76,
  level: 53,
  partyName: '',
  specieName: 'Golem',
  // Descrição da URL de imagem:
  // eslint-disable-next-line max-len
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/76.png',
  size: { height: 14, weight: 3000 },
  status: [
    { stat: 'Hp', value: 101 },
    { stat: 'Attack', value: 141 },
    { stat: 'Defense', value: 151 },
    { stat: 'Special-attack', value: 76 },
    { stat: 'Special-defense', value: 86 },
    { stat: 'Speed', value: 66 },
  ],
  types: ['Rock', 'Ground'],
  heldItems: [],
};

const pokemonWithItem: pokeBuildStdout = {
  pokedexId: 76,
  level: 53,
  partyName: '',
  specieName: 'Golem',
  // Descrição da URL de imagem:
  // eslint-disable-next-line max-len
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/76.png',
  size: { height: 14, weight: 3000 },
  status: [
    { stat: 'Hp', value: 101 },
    { stat: 'Attack', value: 141 },
    { stat: 'Defense', value: 151 },
    { stat: 'Special-attack', value: 76 },
    { stat: 'Special-defense', value: 86 },
    { stat: 'Speed', value: 66 },
  ],
  types: ['Rock', 'Ground'],
  heldItems: [{
    itemName: 'Space mail',
    quickEffect: 'Lets a Trainer write a message and send it via Pokémon trade.',
  },
  ],
};

const pokemonWithNameItemAndId: pokeBuildStdout & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  pokedexId: 76,
  level: 53,
  partyName: 'Pedrita',
  specieName: 'Golem',
  // Descrição da URL de imagem:
  // eslint-disable-next-line max-len
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/76.png',
  size: { height: 14, weight: 3000 },
  status: [
    { stat: 'Hp', value: 101 },
    { stat: 'Attack', value: 141 },
    { stat: 'Defense', value: 151 },
    { stat: 'Special-attack', value: 76 },
    { stat: 'Special-defense', value: 86 },
    { stat: 'Speed', value: 66 },
  ],
  types: ['Rock', 'Ground'],
  heldItems: [{
    itemName: 'Space mail',
    quickEffect: 'Lets a Trainer write a message and send it via Pokémon trade.',
  },
  ],
};

export {
  pokemonWithoutId,
  pokemonWithId,
  pokemonWithItem,
  pokemonWithNameItemAndId,
};
