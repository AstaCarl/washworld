import { OpeningHour } from "src/opening_hours/entities/opening_hour.entity";

export class CreateLocationDto {
    name: string;
    address: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
    openingHours: OpeningHour;
}
