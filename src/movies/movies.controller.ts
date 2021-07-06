import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) { //MoviesService는 클래스이다.
    }

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get('/:id')
    getOne(@Param('id') movieId: number): Movie {
        console.log(typeof movieId);
        return this.moviesService.getOne(movieId); //ID 값을 받아옴.
    }
    
    @Post()
    create(@Body() movieData: CreateMovieDto) { //@Body 데코레이터는 movieData안의 리퀘스트 바디를 가져오기 위함
        return this.moviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId: number) {
	    return this.moviesService.deleteOne(movieId);
    }

    // @Put() //전체 수정

    @Patch('/:id') //부분 수정
    patch(@Param('id') movieId: number, @Body() updateData) {
        return this.moviesService.update(movieId, updateData);
    }
}
