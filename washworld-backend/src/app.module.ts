import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from 'data.source';
import { ProgrammesModule } from './programmes/programmes.module';
import { AdditionalProgrammesModule } from './additional_programmes/additional_programmes.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './authentication/auth.module';
import { MembershipsModule } from './memberships/memberships.module';
import { OpeningHoursModule } from './opening_hours/opening_hours.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot(dbConfig),
    ProgrammesModule,
    AdditionalProgrammesModule,
    UsersModule,
    AuthModule,
    MembershipsModule,
    OpeningHoursModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
