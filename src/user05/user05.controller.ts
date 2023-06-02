import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User05Service } from './user05.service';
import { CreateUser05Dto } from './dto/create-user05.dto';
import { UpdateUser05Dto } from './dto/update-user05.dto';

@Controller('user05')
export class User05Controller {
  constructor(private readonly user05Service: User05Service) {}

  @Post()
  create(@Body() createUser05Dto: CreateUser05Dto) {
    return this.user05Service.create(createUser05Dto);
  }

  @Get()
  findAll() {
    return this.user05Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.user05Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser05Dto: UpdateUser05Dto) {
    return this.user05Service.update(+id, updateUser05Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.user05Service.remove(+id);
  }
}
