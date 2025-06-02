import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from '../data.source';
import { ProgrammesModule } from './programmes/programmes.module';
import { AdditionalProgrammesModule } from './additional_programmes/additional_programmes.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './authentication/auth.module';
import { MembershipsModule } from './memberships/memberships.module';
import { OpeningHoursModule } from './opening_hours/opening_hours.module';
import { CoordinatesModule } from './coordinates/coordinates.module';
import { LocationsModule } from './locations/locations.module';
import { WashesModule } from './washes/washes.module';
import { HallsModule } from './halls/halls.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    // Creates the connection to the database using TypeORM
    TypeOrmModule.forRoot(dbConfig),
    ProgrammesModule,
    AdditionalProgrammesModule,
    UsersModule,
    AuthModule,
    MembershipsModule,
    OpeningHoursModule,
    CoordinatesModule,
    LocationsModule,
    WashesModule,
    HallsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
