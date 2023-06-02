import { Injectable } from '@nestjs/common';
import { CreateUser03Dto } from './dto/create-user03.dto';
import { UpdateUser03Dto } from './dto/update-user03.dto';

@Injectable()
export class User03Service {
  create(createUser03Dto: CreateUser03Dto) {
    return 'This action adds a new user03';
  }

  findAll() {
    return `This action returns all user03`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user03`;
  }

  update(id: number, updateUser03Dto: UpdateUser03Dto) {
    return `This action updates a #${id} user03`;
  }

  remove(id: number) {
    return `This action removes a #${id} user03`;
  }
}
