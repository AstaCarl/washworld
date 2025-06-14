import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

//loads database settings from environment variables and prepares TypeORM to connect to the PostgreSQL database.
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

// Create a new DataSource instance
const datasource = new DataSource(dbConfig as DataSourceOptions);
export default datasource;
