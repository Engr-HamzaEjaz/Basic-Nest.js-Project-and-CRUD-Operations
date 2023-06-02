import { Test, TestingModule } from '@nestjs/testing';
import { User01Service } from './user01.service';

describe('User01Service', () => {
  let service: User01Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User01Service],
    }).compile();

    service = module.get<User01Service>(User01Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
