import { Module } from '@nestjs/common';
import { MembershipsService } from './memberships.service';
import { MembershipsController } from './memberships.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Membership } from './entities/membership.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Membership])], // Add your entities here
  controllers: [MembershipsController],
  providers: [MembershipsService],
})
export class MembershipsModule {}
