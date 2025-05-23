import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const cors = require('cors');
  app.use(cors());
  app.enableCors({
    origin: '*', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  const configb = new DocumentBuilder()
    .setTitle('WashWorld API')
    .setDescription('The WashWorld API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, configb);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
