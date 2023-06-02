import { Module } from '@nestjs/common';
import { User06Service } from './user06.service';
import { User06Controller } from './user06.controller';

@Module({
  controllers: [User06Controller],
  providers: [User06Service]
})
export class User06Module {}
