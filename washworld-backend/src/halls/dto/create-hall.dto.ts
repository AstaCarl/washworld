import { Location } from "src/locations/entities/location.entity";
import { Wash } from "src/washes/entities/wash.entity";

export class CreateHallDto {
    location: Location;
    wash: Wash
    operationalStatus: boolean; // true = operational, false = not operational
}
