import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EstateController } from './estate.controller';
import { EstatesService } from './estate.service';
import { Estate, EstateSchema } from '../shemas/estate.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Estate.name, schema: EstateSchema }]),
  ],
  controllers: [EstateController],
  providers: [EstatesService]
})
export class EstateModule {}
