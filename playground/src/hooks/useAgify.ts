import { useQuery } from 'react-query';
import axios from 'axios';
import { isNil } from 'ramda';
import agifySchema from 'schemas/agify-schema';

const getAgify = async (name: string | null) => {
  // This axios method could be extract in a service to handle cancel tokens
  const { data } = await axios({
    url: `https://api.agify.io/?name=${name}`,
    method: 'GET',
  });

  return agifySchema.parse(data);
};

const useAgify = (name: string | null) =>
  useQuery(`agify_${name}`, () => getAgify(name), {
    enabled: !isNil(name),
  });

export default useAgify;
