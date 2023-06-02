import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User04Service } from './user04.service';
import { CreateUser04Dto } from './dto/create-user04.dto';
import { UpdateUser04Dto } from './dto/update-user04.dto';

@Controller('user04')
export class User04Controller {
  constructor(private readonly user04Service: User04Service) {}

  @Post()
  create(@Body() createUser04Dto: CreateUser04Dto) {
    return this.user04Service.create(createUser04Dto);
  }

  @Get()
  findAll() {
    return this.user04Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.user04Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser04Dto: UpdateUser04Dto) {
    return this.user04Service.update(+id, updateUser04Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.user04Service.remove(+id);
  }
}
