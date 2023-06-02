import { Injectable } from '@nestjs/common';
import { CreateUser10Dto } from './dto/create-user10.dto';
import { UpdateUser10Dto } from './dto/update-user10.dto';

@Injectable()
export class User10Service {
  create(createUser10Dto: CreateUser10Dto) {
    return 'This action adds a new user10';
  }

  findAll() {
    return `This action returns all user10`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user10`;
  }

  update(id: number, updateUser10Dto: UpdateUser10Dto) {
    return `This action updates a #${id} user10`;
  }

  remove(id: number) {
    return `This action removes a #${id} user10`;
  }
}
