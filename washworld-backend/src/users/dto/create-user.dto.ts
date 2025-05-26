import { ApiProperty } from '@nestjs/swagger';
import { Location } from 'src/locations/entities/location.entity';
import { Membership } from 'src/memberships/entities/membership.entity';

export class CreateUserDto {
  @ApiProperty({ example: 'John' })
  firstname: string;
  @ApiProperty({ example: 'Doe' })
  lastname: string;
  @ApiProperty({ example: 'john@doe.com' })
  email: string;
  @ApiProperty({ example: 'password123' })
  password: string;
  @ApiProperty({ example: '123456789' })
  license: string;
  @ApiProperty({ example: {"id": 1} })
  membership: Membership;
  @ApiProperty({ example: {"id": 1}  })
  location: Location;
  @ApiProperty({ example: 2})
  currentLocation: number;
  @ApiProperty({ example: '2023-10-01T12:00:00Z' })
  createdAt: Date;
}
