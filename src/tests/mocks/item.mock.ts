import { itemStdout } from '../../interfaces/IItems';

const itemWithoutId: itemStdout[] = [
  {
    itemName: 'Space mail',
    quickEffect: 'Lets a Trainer write a message and send it via Pokémon trade.',
  },
];

const itemWithId: (itemStdout & { _id: string })[] = [
  {
    _id: '62cf1fc6498565d94eba52cd',
    itemName: 'Space mail',
    quickEffect: 'Lets a Trainer write a message and send it via Pokémon trade.',
  },
];

export {
  itemWithoutId,
  itemWithId,
};
