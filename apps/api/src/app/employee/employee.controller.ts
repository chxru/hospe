import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './interfaces/employee.interface';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('/doctor')
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get('/doctor/:name')
  findEmployeeByname(@Param('name') name): Promise<Employee[]> {
    return this.employeeService.findEmployeeByname(name);
  }

  @Put('/doctor/:id')
  update(
    @Param('id') id,
    @Body() updateEmployeeDto: CreateEmployeeDto
  ): Promise<Employee> {
    return this.employeeService.update(id, updateEmployeeDto);
  }

  @Delete('/doctor/:id')
  remove(@Param('id') id): Promise<Employee> {
    return this.employeeService.remove(id);
  }
}
