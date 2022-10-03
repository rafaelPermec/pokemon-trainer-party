import axios from 'axios';
import itemFactory from './item.factory';

const fetchRandomItems = async () => {
  const itemID = Math.floor(Math.random() * 151);

  const fetch = await axios(
    `https://pokeapi.co/api/v2/item/${itemID === 0 ? 1 : itemID}`,
  )
    .then((item) => item.data)
    .catch((e) => console.log(e));

  // conflito de nomeclatura da API:
  // eslint-disable-next-line camelcase
  const { name, effect_entries } = fetch;

  const items = itemFactory(name, effect_entries);

  console.log(items);

  return items;
};

export default fetchRandomItems;
