import { Module } from '@nestjs/common';
import { User09Service } from './user09.service';
import { User09Controller } from './user09.controller';

@Module({
  controllers: [User09Controller],
  providers: [User09Service]
})
export class User09Module {}
