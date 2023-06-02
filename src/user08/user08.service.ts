import { Injectable } from '@nestjs/common';
import { CreateUser08Dto } from './dto/create-user08.dto';
import { UpdateUser08Dto } from './dto/update-user08.dto';

@Injectable()
export class User08Service {
  create(createUser08Dto: CreateUser08Dto) {
    return 'This action adds a new user08';
  }

  findAll() {
    return `This action returns all user08`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user08`;
  }

  update(id: number, updateUser08Dto: UpdateUser08Dto) {
    return `This action updates a #${id} user08`;
  }

  remove(id: number) {
    return `This action removes a #${id} user08`;
  }
}
