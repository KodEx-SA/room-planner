import { Type } from 'class-transformer';
import {
    IsArray,
    IsNotEmpty,
    IsNumber,
    IsString,
    Max,
    MaxLength,
    Min,
    ValidateNested,
} from 'class-validator';

export class PlacementDto {
    @IsString()
    @IsNotEmpty()
    furnitureId!: string;

    @IsNumber()
    @Min(0)
    x!: number;

    @IsNumber()
    @Min(0)
    y!: number;

    @IsNumber()
    @Min(0)
    @Max(360)
    rotation!: number;
}

export class CreateLayoutDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(80)
    name!: string;

    @IsNumber()
    @Min(100)
    @Max(5000)
    roomWidthCm!: number;

    @IsNumber()
    @Min(100)
    @Max(5000)
    roomDepthCm!: number;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PlacementDto)
    placements!: PlacementDto[];
}