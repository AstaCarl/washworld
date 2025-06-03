import { ApiProperty } from "@nestjs/swagger";
import { Location } from "../../../src/locations/entities/location.entity";

// DTO for creating a hall
export class CreateHallDto {
    @ApiProperty({ example: {"id": 1} })
    location: Location;

    @ApiProperty({ example: true})
    operationalStatus: boolean; // true = operational, false = not operational
}
