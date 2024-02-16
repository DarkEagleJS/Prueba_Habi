import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstateModule } from './estate/estate.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [EstateModule, MongooseModule.forRoot('mongodb://localhost:27017/estate')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
