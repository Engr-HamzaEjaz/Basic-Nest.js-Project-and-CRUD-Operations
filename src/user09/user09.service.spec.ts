import { Test, TestingModule } from '@nestjs/testing';
import { User09Service } from './user09.service';

describe('User09Service', () => {
  let service: User09Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User09Service],
    }).compile();

    service = module.get<User09Service>(User09Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
