import stringSerializer from './string.serializer';

interface pokeType {
  name: string,
  url: string,
}

interface pokeStats {
  base_stat: number,
  effort: number,
  stat: pokeType,
}

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

  const typesBuild = types.map((item: any) => stringSerializer(
    item.type.name,
  ));

  const pokemonBuild = {
    id,
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
