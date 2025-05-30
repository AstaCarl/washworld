import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TestModule } from '../src/test.module';
import * as request from 'supertest';
import { HallsService } from '../src/halls/halls.service';
import { MembershipsService } from '../src/memberships/memberships.service';
import { OpeningHoursService } from '../src/opening_hours/opening_hours.service';
import { LocationsService } from '../src/locations/locations.service';
import { AuthService } from '../src/authentication/auth.service';
import { Role } from '../src/users/Role';

  let membershipsService: MembershipsService;
  let openingHoursService: OpeningHoursService; // Assuming you have an OpeningHoursService
  let locationsService: LocationsService; // Replace with actual LocationsService if exists
  let authService: AuthService;


const createMemberShip = async () => {
    const membership = {
        name: 'Test Membership',
        price: 50,
    };
    const newMembership = await membershipsService.create(membership);
    return newMembership.id;
}

const createUser = async () => {
    const user = {
        firstname: 'testuser',
        lastname: 'testuser',
        password: 'testpassword',
        email: 'test@test.com',
        license: '123456789',
        createdAt: new Date(),
        membership: { id: await createMemberShip(), },// Assuming membership with id 1 exists
        location: { id: await createLocation()}, // Assuming location with id 1 exists
        role: Role.Admin
    }

    const newUser = await authService.signup(user);
    // return newUser.access_token; // Return the user ID
}


const createOpeningHours = async () => {
    const openingHours = {
        openHours: "7-22",
    }

    const newOpeningHours = await openingHoursService.create(openingHours);
    return newOpeningHours;
}

const createLocation = async () => {
    const openHours = await createOpeningHours(); // Assuming opening hours with id 1 exists
    const location = {
        name: 'Test Location',
        address: 'Test Address',
        coordinates: { latitude: 12.34, longitude: 56.78 },
        openingHours: openHours, // Assuming opening hours with id 1 exists
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
    membershipsService = moduleFixture.get<MembershipsService>(MembershipsService);
    openingHoursService = moduleFixture.get<OpeningHoursService>(OpeningHoursService);
    locationsService = moduleFixture.get<LocationsService>(LocationsService);
    authService = moduleFixture.get<AuthService>(AuthService);

    app = moduleFixture.createNestApplication();
    await app.init();
    await hallsService.deleteMany(); // Clear the halls database before each test
  });

  it('should create a hall', async () => {
    const hall = {
      location: { id: await createLocation()}, // Assuming location with id 1 exists
      operationalStatus: true,
      washes: null,
    };

    const { body } = await request(app.getHttpServer())
      .post('/halls/')
      .send(hall)
      .expect(201);

    expect(body.id).toBeDefined();
    expect(body.operationalStatus).toBe(true);
});
});
