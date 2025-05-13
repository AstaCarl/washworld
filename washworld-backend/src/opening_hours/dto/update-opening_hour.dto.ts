import { PartialType } from '@nestjs/mapped-types';
import { CreateOpeningHourDto } from './create-opening_hour.dto';

export class UpdateOpeningHourDto extends PartialType(CreateOpeningHourDto) {}
