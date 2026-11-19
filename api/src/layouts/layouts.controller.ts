import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LayoutsService } from './layouts.service.js';
import { CreateLayoutDto } from './dto/create-layout.dto.js';

@Controller('layouts')
export class LayoutsController {
    constructor(private readonly layoutsService: LayoutsService) { }

    @Post()
    create(@Body() dto: CreateLayoutDto) {
        return this.layoutsService.create(dto);
    }

    @Get()
    findAll() {
        return this.layoutsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.layoutsService.findOne(id);
    }
}