import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrdersService } from './orders.service';


@Controller('orders')
export class OrdersController {
	constructor(private readonly ordersService: OrdersService) {}

	@Get()
	async getOrders() {
		return this.ordersService.findAll();
	}

	@Post()
	async createOrder(
		@Body() body: {customerId:string ; total:number; status:string},
	)
	{
		return this.ordersService.create(body);
	}
}