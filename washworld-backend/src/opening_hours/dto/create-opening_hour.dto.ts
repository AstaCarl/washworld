import { ApiProperty } from "@nestjs/swagger";

export class CreateOpeningHourDto {
    @ApiProperty({ example: "7-22" })
    openHours: string;
}
