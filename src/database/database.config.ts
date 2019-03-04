/**
 * mysql及typeorm配置
 */
import { ConnectionOptions } from 'typeorm';

export const dbConf: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'hero',
  entities: [
    __dirname + '/../**/*.entity{.ts,.js}',
  ],
  synchronize: true,
};