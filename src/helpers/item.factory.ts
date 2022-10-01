import stringSerializer from './string.serializer';

interface effectEntries {
  effect: string,
  language?: object,
  short_effect: string,
}

const itemFactory = (
  name: string,
  effect: effectEntries[],
) => {
  const effectBuild = effect.map((item: effectEntries) => item.short_effect);

  const itemBuild = {
    quantity: 0,
    itemName: stringSerializer(name.replace('-', ' ')),
    quickEffect: effectBuild[0],
  };

  return itemBuild;
};

export default itemFactory;
