import { z } from 'zod';

const pokedexZodSchema = z.object({
  _id: z.string().optional(),
  pokedexId: z.number().max(151),
  level: z.number().max(100),
  partyName: z.string(),
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

type IPokedex = z.infer<typeof pokedexZodSchema>;

export {
  pokedexZodSchema,
  IPokedex,
};
