import { PartialType } from '@nestjs/mapped-types';
import { CreateUser01Dto } from './create-user01.dto';

export class UpdateUser01Dto extends PartialType(CreateUser01Dto) {}
