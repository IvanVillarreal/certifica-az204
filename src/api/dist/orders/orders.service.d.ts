import { Order } from './entities/order.entities';
import { Repository } from 'typeorm';
export declare class OrdersService {
    private readonly orderRepository;
    constructor(orderRepository: Repository<Order>);
    findAll(): Promise<Order[]>;
    create(order: Omit<Order, 'id'>): Promise<Order>;
}
