import { Test, TestingModule } from '@nestjs/testing';
import { User05Controller } from './user05.controller';
import { User05Service } from './user05.service';

describe('User05Controller', () => {
  let controller: User05Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User05Controller],
      providers: [User05Service],
    }).compile();

    controller = module.get<User05Controller>(User05Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
