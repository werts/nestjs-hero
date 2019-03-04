import { Connection } from 'typeorm';

import { heroRepositoryToken, dbConnectionToken } from '../app.providers.token';
import { Hero } from './hero.entity';

export const heroProviders = [{
  provide: heroRepositoryToken,
  useFactory: (connection: Connection) => connection.getRepository(Hero),
  inject: [dbConnectionToken],
},];