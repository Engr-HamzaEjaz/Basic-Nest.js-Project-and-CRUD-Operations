import { Test, TestingModule } from '@nestjs/testing';
import { User02Controller } from './user02.controller';
import { User02Service } from './user02.service';

describe('User02Controller', () => {
  let controller: User02Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User02Controller],
      providers: [User02Service],
    }).compile();

    controller = module.get<User02Controller>(User02Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
