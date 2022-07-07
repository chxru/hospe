import { PartialType } from '@nestjs/swagger';
import { CreateChannelingDto } from './create-channeling.dto';

export class UpdateChannelingDto extends PartialType(CreateChannelingDto) {}
