import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateLayoutDto } from './dto/create-layout.dto.js';

export interface Layout extends CreateLayoutDto {
    id: string;
    createdAt: string;
}

@Injectable()
export class LayoutsService {
    private readonly layouts = new Map<string, Layout>();

    create(dto: CreateLayoutDto): Layout {
        const layout: Layout = {
            ...dto,
            id: randomUUID(),
            createdAt: new Date().toISOString(),
        };
        this.layouts.set(layout.id, layout);
        return layout;
    }

    findAll(): Layout[] {
        return [...this.layouts.values()];
    }

    findOne(id: string): Layout {
        const layout = this.layouts.get(id);
        if (!layout) {
            throw new NotFoundException(`Layout "${id}" not found`);
        }
        return layout;
    }
}