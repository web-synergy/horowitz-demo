import { client } from '../lib/client';

export const getHomeData = async () => {
  return await client.fetch(`*[_type == 'home'][1]`);
};
