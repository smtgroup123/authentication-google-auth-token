import { Controller, Get, Req, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
// import { Request } from 'express';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIndex(): string {
    return this.appService.getIndex();
  }

  @UseGuards(LocalAuthGuard)
  @Get('user/profile')
  getUserProfile(@Request() req){
    return req.user;
  }

}
