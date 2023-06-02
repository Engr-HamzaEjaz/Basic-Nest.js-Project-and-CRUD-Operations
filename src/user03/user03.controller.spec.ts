import { Test, TestingModule } from '@nestjs/testing';
import { User03Controller } from './user03.controller';
import { User03Service } from './user03.service';

describe('User03Controller', () => {
  let controller: User03Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User03Controller],
      providers: [User03Service],
    }).compile();

    controller = module.get<User03Controller>(User03Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
