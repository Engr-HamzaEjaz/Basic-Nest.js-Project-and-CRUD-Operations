import { PartialType } from '@nestjs/mapped-types';
import { CreateUser07Dto } from './create-user07.dto';

export class UpdateUser07Dto extends PartialType(CreateUser07Dto) {}
