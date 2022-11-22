import { z } from 'zod';

const agifySchema = z.object({
  name: z.string(),
  age: z.number(),
  count: z.number(),
});

export default agifySchema;
