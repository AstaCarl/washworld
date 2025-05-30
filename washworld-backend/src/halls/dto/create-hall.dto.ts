import { ApiProperty } from "@nestjs/swagger";
import { Location } from "../../../src/locations/entities/location.entity";

export class CreateHallDto {
    @ApiProperty({ example: {"id": 1} })
    location: Location;

    @ApiProperty({ example: true})
    operationalStatus: boolean; // true = operational, false = not operational
}
