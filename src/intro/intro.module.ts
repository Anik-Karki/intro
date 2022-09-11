import { Module } from '@nestjs/common';
import { IntroService } from './intro.service';
import { IntroResolver } from './intro.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { IntroSchema } from './entities/intro.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Intro', schema: IntroSchema },
    ]),
  ],
  providers: [IntroResolver, IntroService],
})
export class IntroModule {}
