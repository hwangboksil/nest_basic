import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto{
    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;

    @IsOptional()   //optional 추가
    @IsString({ each: true })
    readonly genres: string[];
}