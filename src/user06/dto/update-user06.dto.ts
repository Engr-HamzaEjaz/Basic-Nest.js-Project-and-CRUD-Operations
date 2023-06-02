import { PartialType } from '@nestjs/mapped-types';
import { CreateUser06Dto } from './create-user06.dto';

export class UpdateUser06Dto extends PartialType(CreateUser06Dto) {}
