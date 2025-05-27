import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  // @ts-ignore: is possibly 'undefined'
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'], // Path to your entities
  migrations: ['dist/src/migrations/*{.ts,.js}'], // Path to your migrations
};

const datasource = new DataSource(dbConfig as DataSourceOptions);
export default datasource;
