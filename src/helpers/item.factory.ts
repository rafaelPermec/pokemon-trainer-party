import stringSerializer from './string.serializer';
import { effectEntries } from '../interfaces/IItems';

const itemFactory = (
  name: string,
  effect: effectEntries[],
) => {
  const effectBuild = effect.map((item: effectEntries) => item.short_effect);

  const itemBuild = {
    itemName: stringSerializer(name.replace('-', ' ')),
    quickEffect: effectBuild[0],
  };

  return itemBuild;
};

export default itemFactory;
