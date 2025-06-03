import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// Main function to bootstrap the application(start the application)
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
    // Enable CORS, to give access to the API
  const cors = require('cors');
  app.use(cors());
  app.enableCors({
    origin: '*', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  // Enable Swagger for API documentation
  const swaggerConfig = new DocumentBuilder()
    .setTitle('WashWorld API')
    .setDescription('The WashWorld API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
