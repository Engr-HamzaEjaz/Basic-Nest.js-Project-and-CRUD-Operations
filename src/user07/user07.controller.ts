import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User07Service } from './user07.service';
import { CreateUser07Dto } from './dto/create-user07.dto';
import { UpdateUser07Dto } from './dto/update-user07.dto';

@Controller('user07')
export class User07Controller {
  constructor(private readonly user07Service: User07Service) {}

  @Post()
  create(@Body() createUser07Dto: CreateUser07Dto) {
    return this.user07Service.create(createUser07Dto);
  }

  @Get()
  findAll() {
    return this.user07Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.user07Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser07Dto: UpdateUser07Dto) {
    return this.user07Service.update(+id, updateUser07Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.user07Service.remove(+id);
  }
}
