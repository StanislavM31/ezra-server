// deed.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Deed, DeedSchema } from './schemas/deed.schema';
import { DeedsService } from './deeds.service';
import { DeedsController } from './deeds.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Deed.name, schema: DeedSchema }]),
  ],
  providers: [DeedsService],
  controllers: [DeedsController],
})
export class DeedsModule {}