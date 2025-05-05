import { PartialType } from '@nestjs/mapped-types';
import { CreateAdditionalProgrammeDto } from './create-additional_programme.dto';

export class UpdateAdditionalProgrammeDto extends PartialType(CreateAdditionalProgrammeDto) {}
