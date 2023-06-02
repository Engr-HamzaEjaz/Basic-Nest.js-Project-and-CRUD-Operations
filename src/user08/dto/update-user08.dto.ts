import { PartialType } from '@nestjs/mapped-types';
import { CreateUser08Dto } from './create-user08.dto';

export class UpdateUser08Dto extends PartialType(CreateUser08Dto) {}
