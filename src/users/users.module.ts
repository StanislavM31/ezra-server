import {Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from 'src/schemas/User.schema';
import { UsersService } from './users.service';
import { UserController } from 'src/deeds/deeds.controller';

@Module({
    imports:[
        MongooseModule.forFeature([
            {
            name: User.name,
            schema: userSchema,
        },
    ]),
    ],
    providers:[UsersService],
    controllers:[UserController]
})

export class UsersModule {}