import { Controller, Post, Body } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

type Order = {
  id: string;
  item: string;
  quantity: number;
  price: number;
  [key: string]: any;
};

@Controller('order')
export class OrderController {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'order_queue',
        queueOptions: { durable: false },
      },
    });
  }

  @Post()
  async createOrder(@Body() order: Order) {
    const result = await firstValueFrom(
      this.client.send<{ success: boolean }, Order>('order_created', order),
    );

    return {
      message: 'Order created and sent to queue',
      order,
      result,
    };
  }
}
