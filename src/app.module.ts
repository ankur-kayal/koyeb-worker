import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
