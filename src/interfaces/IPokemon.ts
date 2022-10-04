import { z } from 'zod';
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

const pokemonZodSchema = z.object({
  _id: z.string().optional(),
  pokedexId: z.number().max(151),
  level: z.number().max(100),
  partyName: z.string().min(3),
  specieName: z.string().min(2),
  image: z.string(),
  size: z.object({
    height: z.number(),
    weight: z.number(),
  }),
  status: z.array(z.object({
    stat: z.string(),
    value: z.number(),
  })),
  types: z.array(z.string()),
  heldItems: z.array(z.object({
    itemName: z.string(),
    quickEffect: z.string(),
  })),
});

type IPokemon = z.infer<typeof pokemonZodSchema>;

export {
  pokeType,
  pokeStats,
  pokeBuildStdout,
  pokemonZodSchema,
  IPokemon,
};
