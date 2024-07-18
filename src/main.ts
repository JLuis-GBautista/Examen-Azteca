import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ENV from './env.config';

async function bootstrap() {
  console.log('Se activo el entorno: ' + ENV.ENVIROMENT);
  const app = await NestFactory.create(AppModule);
  await app.listen(ENV.PORT);
}
bootstrap();
