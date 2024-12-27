import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Activation de la validation
  app.useGlobalPipes(new ValidationPipe());
  
  // Préfixe global pour l'API
  app.setGlobalPrefix('api');
  
  // Activation CORS
  app.enableCors();
  
  await app.listen(3000);
  console.log(`Application is running on: http://localhost:3000/api`);
}
bootstrap();