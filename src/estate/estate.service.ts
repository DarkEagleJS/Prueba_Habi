import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Estate } from '../shemas/estate.schema';
import { CreateEstateDto } from 'src/dto/create_estate.dto';
import { UpdateEstateDto } from 'src/dto/update_estate.dto';

@Injectable()
export class EstatesService {
  constructor(@InjectModel(Estate.name) private estateModel: Model<Estate>) {}

      async create(createEstateDto: CreateEstateDto): Promise<Estate> {
        const createdEstate = new this.estateModel(createEstateDto);
        return createdEstate.save();
      }

      async findAll(): Promise<Estate[]> {
        return this.estateModel.find().exec();
      }
    
      async findOne(id: string): Promise<Estate> {
        return this.estateModel.findById(id).exec();
      }

      async delete(id: string) {
        return this.estateModel.findByIdAndDelete(id);
      }

      async update(id: string, updateEstateDto: UpdateEstateDto): Promise<Estate> {
        return this.estateModel.findByIdAndUpdate(id, updateEstateDto, { new: true });
      }
}
