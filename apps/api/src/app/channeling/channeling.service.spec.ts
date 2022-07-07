import { Test, TestingModule } from '@nestjs/testing';
import { ChannelingService } from './channeling.service';

describe('ChannelingService', () => {
  let service: ChannelingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChannelingService],
    }).compile();

    service = module.get<ChannelingService>(ChannelingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
