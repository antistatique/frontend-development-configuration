import { useQuery, UseQueryResult } from 'react-query';
import axios from 'axios';
import { isNil } from 'ramda';

import AgifyResponse from '../types/agify-response';

const getAgify = async (name: string | null): Promise<AgifyResponse> => {
  // This axios method could be extract in a service to handle cancel tokens
  const { data } = await axios({
    url: `https://api.agify.io/?name=${name}`,
    method: 'GET',
  });

  return data;
};

const useAgify = (name: string | null): UseQueryResult<AgifyResponse, Error> =>
  useQuery(`agify_${name}`, () => getAgify(name), {
    enabled: !isNil(name),
  });

export default useAgify;
