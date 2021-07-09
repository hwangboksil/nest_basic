import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {

}

// create-movie-dto.ts 파일내용 그대로 복붙 (? == 읽기전용, 부분만 수정이 가능하도록 필수가 아니게 설정)
// PartialType 설치먼저하기 `$ npm i @nestjs/mapped-types`
//PartialType이란? 