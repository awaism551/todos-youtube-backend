import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Todos Backend')
    .setDescription('Todos are awesome to plan your day')
    .setVersion('1.0')
    .addTag('todos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const corsOpts = {
    origin: '*',

    methods: [
      'GET',
      'POST',
      'PUT',
      'DELETE',
    ],

    allowedHeaders: [
      'Content-Type',
    ],
  };

  app.use(cors(corsOpts));

  await app.listen(3001);
}
bootstrap();
