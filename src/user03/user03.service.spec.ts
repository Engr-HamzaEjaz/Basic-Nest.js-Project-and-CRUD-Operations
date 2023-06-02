import { Test, TestingModule } from '@nestjs/testing';
import { User03Service } from './user03.service';

describe('User03Service', () => {
  let service: User03Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User03Service],
    }).compile();

    service = module.get<User03Service>(User03Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
