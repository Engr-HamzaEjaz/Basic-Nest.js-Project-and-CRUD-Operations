import { Module } from '@nestjs/common';
import { User05Service } from './user05.service';
import { User05Controller } from './user05.controller';

@Module({
  controllers: [User05Controller],
  providers: [User05Service]
})
export class User05Module {}
