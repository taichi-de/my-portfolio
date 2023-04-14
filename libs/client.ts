import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  apiKey: 'MICROCMS_API_KEY',
  serviceDomain: 'taizen-dev',
});
