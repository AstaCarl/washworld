import { ApiProperty } from '@nestjs/swagger';
import { Programme } from '../../programmes/entities/programme.entity';
import { AdditionalProgramme } from '../../../src/additional_programmes/entities/additional_programme.entity';
import { Coordinate } from '../../../src/coordinates/entities/coordinate.entity';
import { OpeningHour } from '../../../src/opening_hours/entities/opening_hour.entity';
import { Hall } from '../../../src/halls/entities/hall.entity';

// This DTO is used to represent the response structure for a wash operation for the documentation on swagger

export class LocationResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  asdress: string;

  @ApiProperty({
    type: () => Coordinate,
    example: { latitude: 12.498, longitude: 14.569 },
  })
  coordinate: Coordinate;

  @ApiProperty({ type: () => OpeningHour, example: { id: 1 } })
  openHours: OpeningHour;

  @ApiProperty({
    type: () => Hall,
    example: {
      id: 1,
      operationalStatus: true,
      washes: {
        id: 1,
        startedTimeDate: '2025-05-15T22:00:00.000Z',
        programme: { id: 1, name: 'Gold', price: 139, runTimeInSeconds: 480 },
        additionalProgramme: {
          id: 1,
          name: 'Extra Rinse',
          price: 20,
          runTimeInSeconds: 60,
        },
        totalRunTimeInSeconds: 540,
        finishedTime: '2025-05-15T22:09:00.000Z',
      },
    },
  })
  halls: Hall;

  @ApiProperty({ type: String, nullable: true })
  finishedTime: Date | null;
}
