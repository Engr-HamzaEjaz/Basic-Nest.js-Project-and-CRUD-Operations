import { Injectable } from '@nestjs/common';
import { CreateUser09Dto } from './dto/create-user09.dto';
import { UpdateUser09Dto } from './dto/update-user09.dto';

@Injectable()
export class User09Service {
  create(createUser09Dto: CreateUser09Dto) {
    return 'This action adds a new user09';
  }

  findAll() {
    return `This action returns all user09`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user09`;
  }

  update(id: number, updateUser09Dto: UpdateUser09Dto) {
    return `This action updates a #${id} user09`;
  }

  remove(id: number) {
    return `This action removes a #${id} user09`;
  }
}
