import { Test, TestingModule } from '@nestjs/testing';
import { User06Service } from './user06.service';

describe('User06Service', () => {
  let service: User06Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User06Service],
    }).compile();

    service = module.get<User06Service>(User06Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
