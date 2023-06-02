import { PartialType } from '@nestjs/mapped-types';
import { CreateUser04Dto } from './create-user04.dto';

export class UpdateUser04Dto extends PartialType(CreateUser04Dto) {}
