import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateEstateDto  {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    floor: string;

    @IsString()
    @IsNotEmpty()
    additional: string;
    
}
