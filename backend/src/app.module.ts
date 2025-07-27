import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module'; // ✅ Import your feature module

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'config/.env',
    }),
    AccountsModule, // ✅ Properly added inside the same imports array
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
