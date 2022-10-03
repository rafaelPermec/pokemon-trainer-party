import stringSerializer from './string.serializer';
import { pokeStats, pokeType } from '../interfaces/IPokemon';

const pokemonFactory = (
  id: number,
  name: string,
  sprites: string,
  height: number,
  weight: number,
  stats: pokeStats[],
  types: pokeType[],
) => {
  const pokemonLevel = Math.floor(Math.random() * 100);

  const statusBuild = stats.map((item: pokeStats) => {
    const stat = stringSerializer(item.stat.name);
    const value = Math.floor(item.base_stat + (pokemonLevel * 0.4));
    return { stat, value };
  });

  // conflito de tipos com a API de consumo:
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const typesBuild = types.map((item: any) => stringSerializer(
    item.type.name,
  ));

  const pokemonBuild = {
    pokedexId: id,
    level: pokemonLevel,
    partyName: '',
    specieName: stringSerializer(name),
    image: sprites,
    size: { height, weight },
    status: statusBuild,
    types: typesBuild,
    heldItems: [],
  };

  return pokemonBuild;
};

export default pokemonFactory;
