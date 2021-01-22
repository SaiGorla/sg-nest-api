import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAbout(): string {
    return 'Hello World from Sai Rohith!';
  }
  getHello(): string {
    return 'About Sai Rohith';
  }
}
