import { Injectable } from '@nestjs/common';
import { CreateUser05Dto } from './dto/create-user05.dto';
import { UpdateUser05Dto } from './dto/update-user05.dto';

@Injectable()
export class User05Service {
  create(createUser05Dto: CreateUser05Dto) {
    return 'This action adds a new user05';
  }

  findAll() {
    return `This action returns all user05`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user05`;
  }

  update(id: number, updateUser05Dto: UpdateUser05Dto) {
    return `This action updates a #${id} user05`;
  }

  remove(id: number) {
    return `This action removes a #${id} user05`;
  }
}
