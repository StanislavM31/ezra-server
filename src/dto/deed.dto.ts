import {IsString, IsBoolean, IsNumber} from 'class-validator'

export class GoodDeedDto {
    @IsNumber()
    id?: number;

    @IsString()
    deed: string;

    @IsString()
    author: string;

    @IsString()
    comments?: string;

    @IsBoolean()
    isDone: boolean;
}