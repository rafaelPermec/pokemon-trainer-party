import { itemStdout } from './IItems';

interface pokeType {
  name: string,
  url: string,
}

interface pokeStats {
  base_stat: number,
  effort: number,
  stat: pokeType,
}

interface pokeStatusStdout {
  stat: string,
  value: number,
}

interface pokeSizeStdout {
  height: number,
  weight: number,
}

interface pokeBuildStdout {
  pokedexId: number,
  level: number,
  partyName: string,
  specieName: string,
  image: string,
  size: pokeSizeStdout,
  status: pokeStatusStdout[],
  types: string[],
  heldItems: itemStdout[],
}

export {
  pokeType,
  pokeStats,
  pokeBuildStdout,
};
