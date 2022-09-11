import { Test, TestingModule } from '@nestjs/testing';
import { IntroResolver } from './intro.resolver';
import { IntroService } from './intro.service';

describe('IntroResolver', () => {
  let resolver: IntroResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntroResolver, IntroService],
    }).compile();

    resolver = module.get<IntroResolver>(IntroResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
