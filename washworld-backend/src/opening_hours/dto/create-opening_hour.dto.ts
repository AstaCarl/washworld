import { ApiProperty } from "@nestjs/swagger";

// DTO for creating an opening hour
export class CreateOpeningHourDto {
    @ApiProperty({ example: "7-22" })
    openHours: string;
}
