import { Controller, Get, Post, Body } from '@nestjs/common';
import { MembershipsService } from './memberships.service';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MembershipResponseDto } from './dto/response-membership.dto';

@Controller('memberships')
export class MembershipsController {
  constructor(private readonly membershipsService: MembershipsService) {}

  @Post()
  @ApiOperation({ summary: 'POST a membership' })
  @ApiResponse({ status: 201, description: 'Membership created successfully.' })
  create(@Body() createMembershipDto: CreateMembershipDto) {
    return this.membershipsService.create(createMembershipDto);
  }

  @Get()
  @ApiOperation({ summary: 'GET all memberships' })
  @ApiResponse({ status: 201, description: 'Memberships retrieved successfully.', type: [MembershipResponseDto] })
  findAll() {
    return this.membershipsService.findAll();
  }
}
