import { Injectable } from '@nestjs/common';
import { CreateUser06Dto } from './dto/create-user06.dto';
import { UpdateUser06Dto } from './dto/update-user06.dto';

@Injectable()
export class User06Service {
  create(createUser06Dto: CreateUser06Dto) {
    return 'This action adds a new user06';
  }

  findAll() {
    return `This action returns all user06`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user06`;
  }

  update(id: number, updateUser06Dto: UpdateUser06Dto) {
    return `This action updates a #${id} user06`;
  }

  remove(id: number) {
    return `This action removes a #${id} user06`;
  }
}
