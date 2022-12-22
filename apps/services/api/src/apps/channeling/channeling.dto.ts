import { PartialType } from '@nestjs/swagger';

export class CreateChannelingDto {
  readonly date: Date;
  readonly time: string;
  readonly maximumPatients: number;
  readonly doctorFee: number;
}

export class UpdateChannelingDto extends PartialType(CreateChannelingDto) {}
