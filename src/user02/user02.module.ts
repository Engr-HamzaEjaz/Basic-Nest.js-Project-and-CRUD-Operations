import { Module } from '@nestjs/common';
import { User02Service } from './user02.service';
import { User02Controller } from './user02.controller';

@Module({
  controllers: [User02Controller],
  providers: [User02Service]
})
export class User02Module {}
