import { Injectable, NotFoundException } from '@nestjs/common';

export interface FurnitureItem {
    id: string;
    name: string;
    category: 'sofa' | 'table' | 'chair' | 'bed' | 'storage';
    widthCm: number;
    depthCm: number;
    heightCm: number;
    priceZar: number;
}

@Injectable()
export class FurnitureService {
    private readonly items: FurnitureItem[] = [
        { id: 'sofa-01', name: 'Three-seater sofa', category: 'sofa', widthCm: 210, depthCm: 90, heightCm: 85, priceZar: 8999 },
        { id: 'table-01', name: 'Dining table', category: 'table', widthCm: 160, depthCm: 90, heightCm: 75, priceZar: 4599 },
        { id: 'chair-01', name: 'Dining chair', category: 'chair', widthCm: 45, depthCm: 50, heightCm: 90, priceZar: 899 },
        { id: 'bed-01', name: 'Queen bed', category: 'bed', widthCm: 160, depthCm: 205, heightCm: 100, priceZar: 7499 },
        { id: 'storage-01', name: 'Bookshelf', category: 'storage', widthCm: 80, depthCm: 30, heightCm: 180, priceZar: 1999 },
    ];

    findAll(): FurnitureItem[] {
        return this.items;
    }

    findOne(id: string): FurnitureItem {
        const item = this.items.find((i) => i.id === id);
        if (!item) {
            throw new NotFoundException(`Furniture item "${id}" not found`);
        }
        return item;
    }
}