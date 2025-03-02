// src/app.module.ts
import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderConsumerController } from './order.consumer';

@Module({
  imports: [],
  controllers: [OrderController, OrderConsumerController],
  providers: [],
})
export class AppModule {}
