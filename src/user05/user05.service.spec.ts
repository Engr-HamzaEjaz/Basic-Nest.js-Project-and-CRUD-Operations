import { Test, TestingModule } from '@nestjs/testing';
import { User05Service } from './user05.service';

describe('User05Service', () => {
  let service: User05Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User05Service],
    }).compile();

    service = module.get<User05Service>(User05Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
