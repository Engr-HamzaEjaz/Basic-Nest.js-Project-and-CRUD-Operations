import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User09Service } from './user09.service';
import { CreateUser09Dto } from './dto/create-user09.dto';
import { UpdateUser09Dto } from './dto/update-user09.dto';

@Controller('user09')
export class User09Controller {
  constructor(private readonly user09Service: User09Service) {}

  @Post()
  create(@Body() createUser09Dto: CreateUser09Dto) {
    return this.user09Service.create(createUser09Dto);
  }

  @Get()
  findAll() {
    return this.user09Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.user09Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser09Dto: UpdateUser09Dto) {
    return this.user09Service.update(+id, updateUser09Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.user09Service.remove(+id);
  }
}
