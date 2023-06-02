import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User06Service } from './user06.service';
import { CreateUser06Dto } from './dto/create-user06.dto';
import { UpdateUser06Dto } from './dto/update-user06.dto';

@Controller('user06')
export class User06Controller {
  constructor(private readonly user06Service: User06Service) {}

  @Post()
  create(@Body() createUser06Dto: CreateUser06Dto) {
    return this.user06Service.create(createUser06Dto);
  }

  @Get()
  findAll() {
    return this.user06Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.user06Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser06Dto: UpdateUser06Dto) {
    return this.user06Service.update(+id, updateUser06Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.user06Service.remove(+id);
  }
}
