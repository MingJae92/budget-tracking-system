import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // ✅ Import ConfigModule
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // ✅ Makes env variables available throughout the app
      envFilePath: 'config/.env', // ✅ Path to your env file
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
