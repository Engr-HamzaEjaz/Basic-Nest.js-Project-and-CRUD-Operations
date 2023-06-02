import { Injectable } from '@nestjs/common';
import { CreateUser02Dto } from './dto/create-user02.dto';
import { UpdateUser02Dto } from './dto/update-user02.dto';

@Injectable()
export class User02Service {
  create(createUser02Dto: CreateUser02Dto) {
    return 'This action adds a new user02';
  }

  findAll() {
    return `This action returns all user02`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user02`;
  }

  update(id: number, updateUser02Dto: UpdateUser02Dto) {
    return `This action updates a #${id} user02`;
  }

  remove(id: number) {
    return `This action removes a #${id} user02`;
  }
}
