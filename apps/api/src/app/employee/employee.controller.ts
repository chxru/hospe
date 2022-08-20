import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('/doctor')
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get('/doctor/:name')
  findEmployeeByName(@Param('name') name) {
    return this.employeeService.findEmployeeByName(name);
  }

  @Put('/doctor/:id')
  update(@Param('id') id, @Body() updateEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.update(id, updateEmployeeDto);
  }

  @Delete('/doctor/:id')
  remove(@Param('id') id) {
    return this.employeeService.remove(id);
  }
}
