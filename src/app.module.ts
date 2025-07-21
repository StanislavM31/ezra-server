import { Module } from '@nestjs/common';
import { MongooseConfigModule } from './shared/mongoose/mongoose.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DeedsModule } from './deeds/deeds.module';

@Module({
  imports: [
    MongooseConfigModule,
    UsersModule,
    AuthModule,
    DeedsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
