import { Test, TestingModule } from '@nestjs/testing';
import { AdditionalProgrammesService } from './additional_programmes.service';

describe('AdditionalProgrammesService', () => {
  let service: AdditionalProgrammesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdditionalProgrammesService],
    }).compile();

    service = module.get<AdditionalProgrammesService>(AdditionalProgrammesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
