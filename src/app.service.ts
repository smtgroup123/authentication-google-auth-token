import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getIndex(): string {
    return 'Authentication google token!';
  }

 async getUserProfile(token:string): Promise<any> {
   try{
   // const token = req.headers.authorization.replace('Bearer ', '');
    const userInfo: any = await this.httpService.axiosRef.get('https://www.googleapis.com/oauth2/v3/userinfo',{
      headers:{
        "Authorization":'Bearer '+token
      }
    })
 
      return userInfo?.data
   
   }
   catch{
    return null
   }
  
  }
}
