import { IsOptional, IsString } from "class-validator";
/* import { IsNotEmpty} from "class-validator"; */

export class CreateUserDto {
    @IsString()
    /* @IsNotEmpty() */
    username: string;

    @IsOptional()
    email?: string;
}
