import { Test, TestingModule } from '@nestjs/testing';
import { User09Controller } from './user09.controller';
import { User09Service } from './user09.service';

describe('User09Controller', () => {
  let controller: User09Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User09Controller],
      providers: [User09Service],
    }).compile();

    controller = module.get<User09Controller>(User09Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
