import { defineConfig } from 'cypress';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: './**/*.e2e.{ts,js}',
  },
  env: process.env,
});
