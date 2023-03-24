import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // to communicate with client
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT); // changing to avoid confict with client
}
bootstrap();
