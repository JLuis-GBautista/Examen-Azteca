import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ENV from './env.config';
import helmet from 'helmet';

async function bootstrap() {
  console.log('Se activo el entorno: ' + ENV.ENVIROMENT);
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors();
  await app.listen(ENV.PORT);
}
bootstrap();
