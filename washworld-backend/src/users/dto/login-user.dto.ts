import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({ example: 'token' })
  access_token: string;
  @ApiProperty({ example: 1 })
  id: number;
}
