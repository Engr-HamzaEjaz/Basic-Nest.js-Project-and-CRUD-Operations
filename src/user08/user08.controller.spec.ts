import { Test, TestingModule } from '@nestjs/testing';
import { User08Controller } from './user08.controller';
import { User08Service } from './user08.service';

describe('User08Controller', () => {
  let controller: User08Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User08Controller],
      providers: [User08Service],
    }).compile();

    controller = module.get<User08Controller>(User08Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
