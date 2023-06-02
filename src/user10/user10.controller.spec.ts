import { Test, TestingModule } from '@nestjs/testing';
import { User10Controller } from './user10.controller';
import { User10Service } from './user10.service';

describe('User10Controller', () => {
  let controller: User10Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User10Controller],
      providers: [User10Service],
    }).compile();

    controller = module.get<User10Controller>(User10Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
