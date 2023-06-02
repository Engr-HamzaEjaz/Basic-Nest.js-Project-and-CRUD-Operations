import { Test, TestingModule } from '@nestjs/testing';
import { User04Controller } from './user04.controller';
import { User04Service } from './user04.service';

describe('User04Controller', () => {
  let controller: User04Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User04Controller],
      providers: [User04Service],
    }).compile();

    controller = module.get<User04Controller>(User04Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
