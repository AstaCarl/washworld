import { Test, TestingModule } from '@nestjs/testing';
import { AdditionalProgrammesController } from './additional_programmes.controller';
import { AdditionalProgrammesService } from './additional_programmes.service';

describe('AdditionalProgrammesController', () => {
  let controller: AdditionalProgrammesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdditionalProgrammesController],
      providers: [AdditionalProgrammesService],
    }).compile();

    controller = module.get<AdditionalProgrammesController>(AdditionalProgrammesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
