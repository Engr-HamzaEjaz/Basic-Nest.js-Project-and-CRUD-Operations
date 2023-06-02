import { Test, TestingModule } from '@nestjs/testing';
import { User07Controller } from './user07.controller';
import { User07Service } from './user07.service';

describe('User07Controller', () => {
  let controller: User07Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User07Controller],
      providers: [User07Service],
    }).compile();

    controller = module.get<User07Controller>(User07Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
