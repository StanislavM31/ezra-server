import {Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from 'src/schemas/User.schema';
import { UsersService } from './users.service';

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
})

export class UsersModule {}