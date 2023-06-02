import { PartialType } from '@nestjs/mapped-types';
import { CreateUser05Dto } from './create-user05.dto';

export class UpdateUser05Dto extends PartialType(CreateUser05Dto) {}
