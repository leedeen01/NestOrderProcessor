// src/order.consumer.ts
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OrderConsumerController {
  @MessagePattern('order_created')
  handleOrderCreated(data: any) {
    console.log('Received order: ', data);
    return { status: 'processed' };
  }
}
