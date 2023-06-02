import { PartialType } from '@nestjs/mapped-types';
import { CreateUser02Dto } from './create-user02.dto';

export class UpdateUser02Dto extends PartialType(CreateUser02Dto) {}
