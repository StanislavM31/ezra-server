import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeedsController } from './deeds/deeds.controller';
import { DeedsService } from './deeds/deeds.service';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/deeds'),
    UsersModule,
  ],
  controllers: [AppController, DeedsController],
  providers: [AppService, DeedsService],
})
export class AppModule { }
