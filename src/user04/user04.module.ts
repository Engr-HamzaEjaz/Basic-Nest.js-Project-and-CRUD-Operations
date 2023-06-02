import { Module } from '@nestjs/common';
import { User04Service } from './user04.service';
import { User04Controller } from './user04.controller';

@Module({
  controllers: [User04Controller],
  providers: [User04Service]
})
export class User04Module {}
