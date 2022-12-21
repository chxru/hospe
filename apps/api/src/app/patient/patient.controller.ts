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
  findEmployeeByName(@Param('name') name) {
    return this.patientService.findEmployeeByName(name);
  }

  @Put('/:id')
  update(@Param('id') id, @Body() updateEmployeeDto: CreatePatientDto) {
    return this.patientService.update(id, updateEmployeeDto);
  }

  @Delete('/doctor/:id')
  remove(@Param('id') id) {
    return this.patientService.remove(id);
  }
}
