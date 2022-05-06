import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const {
  NODE_ENV,
  PORT,
  DB_DATABASE,
  SECRET_KEY,
  LOG_FORMAT,
  LOG_DIR,
  ORIGIN,
  JWT_SECRET = '4d2ca599b4189f74a771f44b8a8d06f572208b5649f5ae216f8e94612a267ff0',
} = process.env;

export const IN_PROD = NODE_ENV === 'production';

export const ONE_MINUTE = 60;

export const ONE_HOUR = 60 * ONE_MINUTE;

export const SALT_ROUND = 10;

export const ONE_BYTE = 1;

export const ONE_KB = 1024 * ONE_BYTE;

export const ONE_MB = 1024 * ONE_KB;
