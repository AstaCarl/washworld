import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TestModule } from '../src/test.module';
import * as request from 'supertest';
import { HallsService } from '../src/halls/halls.service';
import { OpeningHoursService } from '../src/opening_hours/opening_hours.service';
import { LocationsService } from '../src/locations/locations.service';

  let openingHoursService: OpeningHoursService; 
  let locationsService: LocationsService; 

  // Helper function to create opening hours and location
const createOpeningHours = async () => {
    const openingHours = {
        openHours: "7-22",
    }

    const newOpeningHours = await openingHoursService.create(openingHours);
    return newOpeningHours;
}

const createLocation = async () => {
    const openHours = await createOpeningHours(); 
    const location = {
        name: 'Test Location',
        address: 'Test Address',
        coordinates: { latitude: 12.34, longitude: 56.78 },
        openingHours: openHours, 
    }

    const newLocation = await locationsService.create(location);
    return newLocation.id;
}



describe('Halls E2E Tests', () => {
  let app: INestApplication;
  let hallsService: HallsService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TestModule],
    }).compile();
    hallsService = moduleFixture.get<HallsService>(HallsService);
    openingHoursService = moduleFixture.get<OpeningHoursService>(OpeningHoursService);
    locationsService = moduleFixture.get<LocationsService>(LocationsService);

    // Create the application instance
    app = moduleFixture.createNestApplication();
    await app.init(); // Initialize the application
    await hallsService.deleteMany(); // Clear the halls table before each test
  });

  it('should create a hall', async () => {
    // arrange
    const hall = {
      location: { id: await createLocation()}, 
      operationalStatus: true,
      washes: null,
    };

    // act
    const { body } = await request(app.getHttpServer())
      .post('/halls/')
      .send(hall)
      // assert
      .expect(201);
      
    expect(body.id).toBeDefined();
    expect(body.operationalStatus).toBe(true);
});
});
