import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({  //ValidationPipe : 유효성 검사를 해준다.
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, //유저가 보낸 정보의 타입을 우리가 원하는 실제 타입으로 변환해줌.
    })
  );
  await app.listen(3000);
}
bootstrap();
