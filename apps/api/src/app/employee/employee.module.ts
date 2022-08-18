import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeEntity } from './entities/employee.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeEntity }]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
