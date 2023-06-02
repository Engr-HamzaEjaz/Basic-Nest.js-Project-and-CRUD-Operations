import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User01Service } from './user01.service';
import { CreateUser01Dto } from './dto/create-user01.dto';
import { UpdateUser01Dto } from './dto/update-user01.dto';

@Controller('user01')
export class User01Controller {
  constructor(private readonly user01Service: User01Service) {}

  @Post()
  create(@Body() createUser01Dto: CreateUser01Dto) {
    return this.user01Service.create(createUser01Dto);
  }

  @Get()
  findAll() {
    return this.user01Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.user01Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser01Dto: UpdateUser01Dto) {
    return this.user01Service.update(+id, updateUser01Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.user01Service.remove(+id);
  }
}
