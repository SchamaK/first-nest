import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EleveModule } from './eleve/eleve.module';

@Module({
  imports: [EleveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
