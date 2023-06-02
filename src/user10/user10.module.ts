import { Module } from '@nestjs/common';
import { User10Service } from './user10.service';
import { User10Controller } from './user10.controller';

@Module({
  controllers: [User10Controller],
  providers: [User10Service]
})
export class User10Module {}
