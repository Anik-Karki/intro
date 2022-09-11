import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IntroService } from './intro.service';
import { Intro } from './entities/intro.entity';
import { CreateIntroInput } from './dto/create-intro.input';
import { UpdateIntroInput } from './dto/update-intro.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/common/guard/gql-auth.guard';

@Resolver(() => Intro)
@UseGuards(GqlAuthGuard)
export class IntroResolver {
  constructor(private readonly introService: IntroService) {}

  @Mutation(() => Intro)
  @UseGuards(GqlAuthGuard)
  async createIntro(
    @Args('createIntroInput') createIntroInput: CreateIntroInput,
  ): Promise<Intro> {
    const intro = await this.introService.createIntro(
      createIntroInput,
    );
    return intro;
  }

  @Query(() => [Intro])
  async projects(): Promise<Intro[]> {
    const projects = this.introService.findAll();
    return projects;
  }

  // // @Mutation(() => Intro)
  // updateIntro(
  //   @Args('updateIntroInput') updateIntroInput: UpdateIntroInput,
  // ) {
  //   return this.IntroService.updateIntro(
  //     updateIntroInput._id,
  //     updateIntroInput,
  //   );
  // }
}
