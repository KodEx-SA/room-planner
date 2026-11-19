import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { FurnitureModule } from './furniture/furniture.module.js';
import { LayoutsModule } from './layouts/layouts.module.js';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [FurnitureModule, LayoutsModule],
})
export class AppModule { }
