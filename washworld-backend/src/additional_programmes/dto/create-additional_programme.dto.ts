import { ApiProperty } from '@nestjs/swagger';

export class CreateAdditionalProgrammeDto {
  @ApiProperty({
    example: 'Extra Rinse',
  })
  name: string;
  @ApiProperty({example: 20})
  price: number;
  @ApiProperty({example: 300})
  runTimeInSeconds: number;
  @ApiProperty({
    example: 'An additional rinse cycle to ensure all detergent is removed.',
  })
  description: string;
}
