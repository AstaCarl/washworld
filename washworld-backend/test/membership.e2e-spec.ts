import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MembershipsService } from '../src/memberships/memberships.service';
import { TestModule } from '../src/test.module';
import * as request from 'supertest';

describe('Membership E2E Tests', () => {
  let app: INestApplication;
  let membershipsService: MembershipsService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TestModule],
    }).compile();
    membershipsService =
      moduleFixture.get<MembershipsService>(MembershipsService);

    // Create the application instance
    app = moduleFixture.createNestApplication();
    await app.init(); // Initialize the application
    await membershipsService.deleteMany(); // Clear the table before each test
  });

  it('should create a membership', async () => {
    // Arrange
    const membership = {
      name: 'Premium Membership',
      price: 99,
    };

    const expectedMembership = {
      name: 'Premium Membership',
      price: 99,
    };

    // Act
    const { body } = await request(app.getHttpServer())
      .post('/memberships/')
      .send(membership)
      // Assert
      .expect(201);

    expect(body.id).toBeDefined();
    expect(body).toMatchObject(expectedMembership);
  });

  it('should get all memberships', async () => {
    // Arrange
    const membership1 = {
      name: 'Basic Membership',
      price: 49,
    };

    const membership2 = {
      name: 'Premium Membership',
      price: 99,
    };

    await membershipsService.create(membership1);
    await membershipsService.create(membership2);

    // Act
    const { body } = await request(app.getHttpServer())
      .get('/memberships/')
      // Assert
      .expect(200);

    expect(body.length).toBe(2);
    expect(body[0].name).toBe('Basic Membership');
    expect(body[1].name).toBe('Premium Membership');
  });
});
