import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order-dto';
import { UpdateOrderDto } from './dto/udpate-order-dto';

@Controller('orders')
export class OrdersController {
  @Post()
  create(@Body() createOrderDto: CreateOrderDto): void {

  }

  @Put(":id")
  update(@Param("id") orderId: string, @Body() updateOrderDto: UpdateOrderDto): void {

  }
  
  @Delete(":id")
  delete(@Param("id") orderId: string): void {

  }
}
