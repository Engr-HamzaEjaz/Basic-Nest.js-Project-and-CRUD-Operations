import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User10Service } from './user10.service';
import { CreateUser10Dto } from './dto/create-user10.dto';
import { UpdateUser10Dto } from './dto/update-user10.dto';

@Controller('user10')
export class User10Controller {
  constructor(private readonly user10Service: User10Service) {}

  @Post()
  create(@Body() createUser10Dto: CreateUser10Dto) {
    return this.user10Service.create(createUser10Dto);
  }

  @Get()
  findAll() {
    return this.user10Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.user10Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser10Dto: UpdateUser10Dto) {
    return this.user10Service.update(+id, updateUser10Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.user10Service.remove(+id);
  }
}
