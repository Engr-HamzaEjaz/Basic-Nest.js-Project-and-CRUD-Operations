import { Test, TestingModule } from '@nestjs/testing';
import { User04Service } from './user04.service';

describe('User04Service', () => {
  let service: User04Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User04Service],
    }).compile();

    service = module.get<User04Service>(User04Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
