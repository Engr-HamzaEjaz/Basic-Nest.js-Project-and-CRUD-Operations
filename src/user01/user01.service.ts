import { Injectable } from '@nestjs/common';
import { CreateUser01Dto } from './dto/create-user01.dto';
import { UpdateUser01Dto } from './dto/update-user01.dto';

@Injectable()
export class User01Service {
  create(createUser01Dto: CreateUser01Dto) {
    return 'This action adds a new user01';
  }

  findAll() {
    return `This action returns all user01`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user01`;
  }

  update(id: number, updateUser01Dto: UpdateUser01Dto) {
    return `This action updates a #${id} user01`;
  }

  remove(id: number) {
    return `This action removes a #${id} user01`;
  }
}
