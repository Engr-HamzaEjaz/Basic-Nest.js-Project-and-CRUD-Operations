import { Injectable } from '@nestjs/common';
import { CreateUser04Dto } from './dto/create-user04.dto';
import { UpdateUser04Dto } from './dto/update-user04.dto';

@Injectable()
export class User04Service {
  create(createUser04Dto: CreateUser04Dto) {
    return 'This action adds a new user04';
  }

  findAll() {
    return `This action returns all user04`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user04`;
  }

  update(id: number, updateUser04Dto: UpdateUser04Dto) {
    return `This action updates a #${id} user04`;
  }

  remove(id: number) {
    return `This action removes a #${id} user04`;
  }
}
