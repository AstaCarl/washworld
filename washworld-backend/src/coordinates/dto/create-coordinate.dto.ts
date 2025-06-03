import { ApiProperty } from "@nestjs/swagger";


// DTO for creating a coordinate
export class CreateCoordinateDto {
    @ApiProperty({example: 52.5200})
    latitude: number;
    @ApiProperty({example: 13.4050})
    longitude: number;
}
