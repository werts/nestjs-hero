import { dbConnectionToken } from './../app.providers.token';
import { createConnection } from 'typeorm';
import { dbConf } from './database.config';

export const databaseProviders = [{
  provide: dbConnectionToken,
  useFactory: async () => await createConnection(dbConf)
}];