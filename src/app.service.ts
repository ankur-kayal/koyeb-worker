import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Logger } from '@nestjs/common/services';

@Injectable()
export class AppService {
  private readonly log = new Logger(AppService.name);
  getHello(): string {
    return 'Hello World!';
  }

  @Cron(CronExpression.EVERY_10_MINUTES)
  workerLogger() {
    this.log.warn('Worker processing!');
  }
}
