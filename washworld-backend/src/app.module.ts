import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from 'data.source';
import { ProgrammesModule } from './programmes/programmes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot(dbConfig),
    ProgrammesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
