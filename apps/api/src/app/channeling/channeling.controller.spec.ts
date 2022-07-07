import { Test, TestingModule } from '@nestjs/testing';
import { ChannelingController } from './channeling.controller';
import { ChannelingService } from './channeling.service';

describe('ChannelingController', () => {
  let controller: ChannelingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChannelingController],
      providers: [ChannelingService],
    }).compile();

    controller = module.get<ChannelingController>(ChannelingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
