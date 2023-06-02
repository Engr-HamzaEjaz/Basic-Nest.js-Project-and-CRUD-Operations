import { Module } from '@nestjs/common';
import { User01Service } from './user01.service';
import { User01Controller } from './user01.controller';

@Module({
  controllers: [User01Controller],
  providers: [User01Service]
})
export class User01Module {}
