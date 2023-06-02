import { Test, TestingModule } from '@nestjs/testing';
import { User07Service } from './user07.service';

describe('User07Service', () => {
  let service: User07Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User07Service],
    }).compile();

    service = module.get<User07Service>(User07Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
