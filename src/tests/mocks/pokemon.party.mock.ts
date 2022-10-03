import { pokeBuildStdout } from '../../interfaces/IPokemon';

const pokemonParty: pokeBuildStdout[] = [
  {
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
  },
  {
    pokedexId: 109,
    level: 74,
    partyName: 'Tosse',
    specieName: 'Koffing',
    // Descrição da URL de imagem:
    // eslint-disable-next-line max-len
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/109.png',
    size: { height: 6, weight: 10 },
    status: [
      { stat: 'Hp', value: 69 },
      { stat: 'Attack', value: 94 },
      { stat: 'Defense', value: 124 },
      { stat: 'Special-attack', value: 89 },
      { stat: 'Special-defense', value: 74 },
      { stat: 'Speed', value: 64 },
    ],
    types: ['Poison'],
    heldItems: [{ itemName: 'Blue flute', quickEffect: 'Cures sleep.' },
    ],
  },
  {
    pokedexId: 30,
    level: 26,
    partyName: 'Dona Ratona',
    specieName: 'Nidorina',
    // Descrição da URL de imagem:
    // eslint-disable-next-line max-len
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/30.png',
    size: { height: 8, weight: 200 },
    status: [
      { stat: 'Hp', value: 80 },
      { stat: 'Attack', value: 72 },
      { stat: 'Defense', value: 77 },
      { stat: 'Special-attack', value: 65 },
      { stat: 'Special-defense', value: 65 },
      { stat: 'Speed', value: 66 },
    ],
    types: ['Poison'],
    heldItems: [{
      itemName: 'Dive ball',
      // Descrição do item:
      // eslint-disable-next-line max-len
      quickEffect: 'Tries to catch a wild Pokémon. Success rate is 3.5× when underwater, fishing, or surfing.',
    },
    ],
  },
];

export default pokemonParty;
