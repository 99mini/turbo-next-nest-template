import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}

bootstrap().catch((err) => {
  console.error('Error during app bootstrap:', err);
  process.exit(1);
});
