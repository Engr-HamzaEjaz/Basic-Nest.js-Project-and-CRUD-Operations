import { Test, TestingModule } from '@nestjs/testing';
import { User01Controller } from './user01.controller';
import { User01Service } from './user01.service';

describe('User01Controller', () => {
  let controller: User01Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User01Controller],
      providers: [User01Service],
    }).compile();

    controller = module.get<User01Controller>(User01Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
