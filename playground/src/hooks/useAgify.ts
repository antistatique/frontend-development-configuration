import { useQuery } from 'react-query';
import axios from 'axios';
import { isNil } from 'ramda';
import { z } from 'zod';

const responseSchema = z.object({
  name: z.string(),
  age: z.number(),
  count: z.number(),
});

const getAgify = async (name: string | null) => {
  // This axios method could be extract in a service to handle cancel tokens
  const { data } = await axios({
    url: `https://api.agify.io/?name=${name}`,
    method: 'GET',
  });

  return responseSchema.parse(data);
};

const useAgify = (name: string | null) =>
  useQuery(`agify_${name}`, () => getAgify(name), {
    enabled: !isNil(name),
  });

export default useAgify;
