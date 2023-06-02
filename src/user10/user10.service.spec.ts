import { Test, TestingModule } from '@nestjs/testing';
import { User10Service } from './user10.service';

describe('User10Service', () => {
  let service: User10Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User10Service],
    }).compile();

    service = module.get<User10Service>(User10Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
