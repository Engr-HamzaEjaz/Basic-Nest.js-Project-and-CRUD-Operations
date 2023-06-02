import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User02Service } from './user02.service';
import { CreateUser02Dto } from './dto/create-user02.dto';
import { UpdateUser02Dto } from './dto/update-user02.dto';

@Controller('user02')
export class User02Controller {
  constructor(private readonly user02Service: User02Service) {}

  @Post()
  create(@Body() createUser02Dto: CreateUser02Dto) {
    return this.user02Service.create(createUser02Dto);
  }

  @Get()
  findAll() {
    return this.user02Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.user02Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser02Dto: UpdateUser02Dto) {
    return this.user02Service.update(+id, updateUser02Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.user02Service.remove(+id);
  }
}
