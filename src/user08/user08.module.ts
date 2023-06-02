import { Module } from '@nestjs/common';
import { User08Service } from './user08.service';
import { User08Controller } from './user08.controller';

@Module({
  controllers: [User08Controller],
  providers: [User08Service]
})
export class User08Module {}
