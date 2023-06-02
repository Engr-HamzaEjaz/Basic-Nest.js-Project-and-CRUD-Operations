import { PartialType } from '@nestjs/mapped-types';
import { CreateUser10Dto } from './create-user10.dto';

export class UpdateUser10Dto extends PartialType(CreateUser10Dto) {}
