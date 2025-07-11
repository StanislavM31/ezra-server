import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ItemModule,
    UserModule,
    MongooseModule.forRoot('mongodb://localhost:27017/goodItemsDB'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
