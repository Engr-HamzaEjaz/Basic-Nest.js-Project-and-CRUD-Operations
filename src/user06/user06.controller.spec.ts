import { Test, TestingModule } from '@nestjs/testing';
import { User06Controller } from './user06.controller';
import { User06Service } from './user06.service';

describe('User06Controller', () => {
  let controller: User06Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User06Controller],
      providers: [User06Service],
    }).compile();

    controller = module.get<User06Controller>(User06Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
