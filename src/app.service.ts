import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { Logger } from '@nestjs/common/services';

@Injectable()
export class AppService {
  private readonly log = new Logger(AppService.name);
  getHello(): string {
    return 'Hello World!';
  }

  @Interval(5000)
  workerLogger() {
    this.log.warn('Worker processing!');
  }
}
