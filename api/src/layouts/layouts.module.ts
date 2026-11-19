import { Module } from '@nestjs/common';
import { LayoutsController } from './layouts.controller.js';
import { LayoutsService } from './layouts.service.js';

@Module({
  controllers: [LayoutsController],
  providers: [LayoutsService]
})
export class LayoutsModule {}
