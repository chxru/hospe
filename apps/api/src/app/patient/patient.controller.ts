import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post('/')
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.create(createPatientDto);
  }

  @Get('/:name')
  findPatientByName(@Param('name') name) {
    return this.patientService.findPatientByName(name);
  }

  @Put('/:id')
  update(@Param('id') id, @Body() updatePatientDto: CreatePatientDto) {
    return this.patientService.update(id, updatePatientDto);
  }

  @Delete('/patient/:id')
  remove(@Param('id') id) {
    return this.patientService.remove(id);
  }
}
