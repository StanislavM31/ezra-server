import {IsString, IsBoolean} from 'class-validator'

export class GoodDeedDto {
    @IsString()
    deed: string;

    @IsString()
    author: string;

    @IsString()
    comments?: string;

    @IsBoolean()
    done: boolean;
}