import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateIntroInput } from './dto/create-intro.input';
// import { UpdateIntroInput } from './dto/update-intro.input';
import { Intro} from './entities/intro.entity';

@Injectable()
export class IntroService {
  constructor(
    @InjectModel('Intro')
    private readonly introModel: Model<Intro>,
  ) {}

  //create new intro

  async createIntro(
    createIntroInput: CreateIntroInput,
  ): Promise<Intro> {
    const createIntro = await this.introModel.create(
      createIntroInput,
    );
    return createIntro.save();
  }

  async findAll(): Promise<Intro[]> {
    const intro = await this.introModel.find().exec();
    return intro;
  }

  // async findOne(id: String) {
  //   const intro = await this.introModel.findOne({ _id: id }).exec();
  //   if (!intro) {
  //     throw new NotFoundException(`Project ${id} not found`);
  //   }
  //   return intro;
  // }

  // async updateIntro(
  //   id: String,
  //   updateIntroInput: UpdateIntroInput,
  // ) {
  //   const updateIntro = await this.IntroModel
  //     .findOneAndUpdate(
  //       { _id: id },
  //       { $set: updateIntroInput },
  //       { new: true },
  //     )
  //     .exec();

  //   if (!updateIntro) {
  //     throw new NotFoundException(`intro ${id} not found`);
  //   }
  //   return updateIntro;
  // }
}
