import { ApiProperty } from "@nestjs/swagger";
import { OpeningHour } from "src/opening_hours/entities/opening_hour.entity";

export class CreateLocationDto {
      @ApiProperty({ example: "Lyngby Hovedgaade" })
    name: string;
    @ApiProperty({ example: "Lyngby Hovedgaade 123, 2800 Kgs. Lyngby" })
    address: string;

    @ApiProperty({ example: {"latitude": 12.498, "longitude": 14.569} })
    coordinates: {
        latitude: number;
        longitude: number;
    };
    @ApiProperty({ example: {"id": 1} })
    openingHours: OpeningHour;
}
