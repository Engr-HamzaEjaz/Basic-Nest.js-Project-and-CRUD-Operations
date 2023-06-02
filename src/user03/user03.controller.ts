import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User03Service } from './user03.service';
import { CreateUser03Dto } from './dto/create-user03.dto';
import { UpdateUser03Dto } from './dto/update-user03.dto';

@Controller('user03')
export class User03Controller {
  constructor(private readonly user03Service: User03Service) {}

  @Post()
  create(@Body() createUser03Dto: CreateUser03Dto) {
    return this.user03Service.create(createUser03Dto);
  }

  @Get()
  findAll() {
    return this.user03Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.user03Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser03Dto: UpdateUser03Dto) {
    return this.user03Service.update(+id, updateUser03Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.user03Service.remove(+id);
  }
}
