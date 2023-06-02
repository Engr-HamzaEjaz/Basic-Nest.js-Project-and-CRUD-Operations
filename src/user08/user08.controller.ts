import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User08Service } from './user08.service';
import { CreateUser08Dto } from './dto/create-user08.dto';
import { UpdateUser08Dto } from './dto/update-user08.dto';

@Controller('user08')
export class User08Controller {
  constructor(private readonly user08Service: User08Service) {}

  @Post()
  create(@Body() createUser08Dto: CreateUser08Dto) {
    return this.user08Service.create(createUser08Dto);
  }

  @Get()
  findAll() {
    return this.user08Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.user08Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser08Dto: UpdateUser08Dto) {
    return this.user08Service.update(+id, updateUser08Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.user08Service.remove(+id);
  }
}
