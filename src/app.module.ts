import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [HttpModule,PassportModule],
  controllers: [AppController],
  providers: [AppService,LocalStrategy],
})
export class AppModule {}
