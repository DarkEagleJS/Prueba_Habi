import {Body,ConflictException, NotFoundException, Controller, Get, Param, Post, Delete, HttpCode, Put } from '@nestjs/common';
import { EstatesService } from '../estate/estate.service';
import { CreateEstateDto } from 'src/dto/create_estate.dto';
import { UpdateEstateDto } from 'src/dto/update_estate.dto';

@Controller('estate')
export class EstateController {
    constructor(private estatesService: EstatesService) {}

    @Get()
    async findAll() {
      return this.estatesService.findAll();
    }
  
    @Post()
    async create(@Body() body: CreateEstateDto) {
      try {
        return await this.estatesService.create(body);
      } catch (error) {
        if (error.code === 11000) {
          throw new ConflictException('Estate already exists');
        }
        throw error;
      }
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string) {
      const estate = await this.estatesService.findOne(id);
      if (!estate) throw new NotFoundException('Estate does not exist!');
      return estate;
    }
  
    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
      const estate = await this.estatesService.delete(id);
      if (!estate) throw new NotFoundException('Estate does not exist!');
      return estate;
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdateEstateDto) {
      const estate = await this.estatesService.update(id, body);
      if (!estate) throw new NotFoundException('Estate does not exist!');
      return estate;
    }
}
