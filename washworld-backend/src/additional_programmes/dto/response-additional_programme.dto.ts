import { ApiProperty } from '@nestjs/swagger';

// This DTO is used to represent the response structure for a wash operation for the documentation on swagger

export class AdditionalProgrammeResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  runTimeInSeconds: number;
}
