import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ChannelingModule } from './channeling/channeling.module';
import { AuthModule } from './auth/auth.module';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    AuthModule,
    ChannelingModule,
    BookingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
