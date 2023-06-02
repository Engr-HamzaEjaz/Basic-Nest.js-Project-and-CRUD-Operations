import { Test, TestingModule } from '@nestjs/testing';
import { User02Service } from './user02.service';

describe('User02Service', () => {
  let service: User02Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User02Service],
    }).compile();

    service = module.get<User02Service>(User02Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
