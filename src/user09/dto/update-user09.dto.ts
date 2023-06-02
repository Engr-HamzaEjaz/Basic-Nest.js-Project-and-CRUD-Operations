import { PartialType } from '@nestjs/mapped-types';
import { CreateUser09Dto } from './create-user09.dto';

export class UpdateUser09Dto extends PartialType(CreateUser09Dto) {}
