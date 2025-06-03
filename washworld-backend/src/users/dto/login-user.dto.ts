import { ApiProperty } from '@nestjs/swagger';

// DTO for user login response - swagger documentation
export class LoginResponseDto {
  @ApiProperty({ example: 'token' })
  access_token: string;
  @ApiProperty({ example: 1 })
  id: number;
}
