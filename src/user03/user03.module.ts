import { Module } from '@nestjs/common';
import { User03Service } from './user03.service';
import { User03Controller } from './user03.controller';

@Module({
  controllers: [User03Controller],
  providers: [User03Service]
})
export class User03Module {}
