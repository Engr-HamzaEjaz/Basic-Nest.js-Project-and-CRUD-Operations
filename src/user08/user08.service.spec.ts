import { Test, TestingModule } from '@nestjs/testing';
import { User08Service } from './user08.service';

describe('User08Service', () => {
  let service: User08Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User08Service],
    }).compile();

    service = module.get<User08Service>(User08Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
