import { Injectable } from '@nestjs/common';
import { CreateGenderInput } from './dto/create-gender.input';
// import { UpdateGenderInput } from './dto/update-Gender.input';

@Injectable()
export class GenderService {
  create(createGenderInput: CreateGenderInput) {
    return 'This action adds a new gender';
  }

  findAll() {
    return `This action returns all gender`;
  }

  

  // update(id: number, updateGenderInput: UpdateGenderInput) {
  //   return `This action updates a #${id} Gender`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} Gender`;
  // }
}
