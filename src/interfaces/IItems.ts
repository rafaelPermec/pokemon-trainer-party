import { z } from 'zod';

interface effectEntries {
  effect: string,
  language?: object,
  short_effect: string,
}

interface itemStdout {
  itemName: string,
  quickEffect: string,
}

const itemZodSchema = z.object({
  itemName: z.string(),
  quickEffect: z.string(),
});

type IItems = z.infer<typeof itemZodSchema>;

export {
  effectEntries,
  itemStdout,
  IItems,
};
