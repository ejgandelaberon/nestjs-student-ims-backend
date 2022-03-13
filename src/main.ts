import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  //const globalPrefix = 'api';
  //app.setGlobalPrefix(globalPrefix);
  const port = process.env.port || 3000;
  await app.listen(3000, () => {
    console.log('Listening at http://localhost:' + port);
  });
}
bootstrap();
