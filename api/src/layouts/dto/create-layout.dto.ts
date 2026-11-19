export class PlacementDto {
    furnitureId!: string;
    x!: number;
    y!: number;
    rotation!: number;
}

export class CreateLayoutDto {
    name!: string;
    roomWidthCm!: number;
    roomDepthCm!: number;
    placements!: PlacementDto[];
}