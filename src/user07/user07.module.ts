import { Module } from '@nestjs/common';
import { User07Service } from './user07.service';
import { User07Controller } from './user07.controller';

@Module({
  controllers: [User07Controller],
  providers: [User07Service]
})
export class User07Module {}
