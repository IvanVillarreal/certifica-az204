import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    getOrders(): Promise<import("./entities/order.entities").Order[]>;
    createOrder(body: {
        customerId: string;
        total: number;
        status: string;
    }): Promise<import("./entities/order.entities").Order>;
}
