import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChannelingModule } from './channeling/channeling.module';
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';
import { NotificationService } from './notification/notification.service';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    AuthModule,
    ChannelingModule,
    EmployeeModule,
  ],
  controllers: [],
  providers: [NotificationService],
})
export class AppModule { }
