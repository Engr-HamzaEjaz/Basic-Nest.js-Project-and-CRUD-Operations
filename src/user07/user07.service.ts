import { Injectable } from '@nestjs/common';
import { CreateUser07Dto } from './dto/create-user07.dto';
import { UpdateUser07Dto } from './dto/update-user07.dto';

@Injectable()
export class User07Service {
  create(createUser07Dto: CreateUser07Dto) {
    return 'This action adds a new user07';
  }

  findAll() {
    return `This action returns all user07`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user07`;
  }

  update(id: number, updateUser07Dto: UpdateUser07Dto) {
    return `This action updates a #${id} user07`;
  }

  remove(id: number) {
    return `This action removes a #${id} user07`;
  }
}
