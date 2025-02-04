import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeedsController } from './deeds/deeds.controller';
import { DeedsService } from './deeds/deeds.service';


@Module({
  controllers: [AppController, DeedsController],
  providers: [AppService, DeedsService],
})
export class AppModule {}
