// import { Strategy } from 'passport-local';
import { Strategy } from 'passport-custom';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { HttpService } from '@nestjs/axios';
import { AppService } from './app.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'custom') {

constructor(private appService: AppService) {
    super();
}

  async validate(req: Request): Promise<any> {
    
    const token = req.headers.authorization.replace('Bearer ', '');
    const userInfo = await this.appService.getUserProfile(token)
    
    if (!userInfo) {
      throw new UnauthorizedException();
    }
    return userInfo;
  }

}