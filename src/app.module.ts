import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User01Module } from './user01/user01.module';
import { User02Module } from './user02/user02.module';
import { User03Module } from './user03/user03.module';
import { User04Module } from './user04/user04.module';
import { User05Module } from './user05/user05.module';
import { User06Module } from './user06/user06.module';
import { User07Module } from './user07/user07.module';
import { User08Module } from './user08/user08.module';
import { User09Module } from './user09/user09.module';
import { User10Module } from './user10/user10.module';

@Module({
  imports: [User01Module, User02Module, User03Module, User04Module, User05Module, User06Module, User07Module, User08Module, User09Module, User10Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
