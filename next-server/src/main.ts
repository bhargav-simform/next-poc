import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import "./mcp/Server"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  try {
    app.enableCors();
    
    await app.listen(3001);

  } catch (error) {
    console.error("Error during startup:", error);
    process.exit(1);
  }
}


bootstrap();
