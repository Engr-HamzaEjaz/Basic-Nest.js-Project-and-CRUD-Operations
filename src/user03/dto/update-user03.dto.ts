import { PartialType } from '@nestjs/mapped-types';
import { CreateUser03Dto } from './create-user03.dto';

export class UpdateUser03Dto extends PartialType(CreateUser03Dto) {}
