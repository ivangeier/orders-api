import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderItem } from './order-item.entity';

export enum OrderStatus {
  PENDING = 'pending',
  PAID = 'paid',
  FAILED = 'failed',
}

export type CreateOrderCommand = {
  client_id: number;
  items: {
    product_id: string;
    quantity: number;
    price: number;
  }[];
};

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

  @Column()
  client_id: number; // auth user

  @Column()
  status: OrderStatus = OrderStatus.PENDING;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, {
    cascade: ['insert'],
  })
  items: OrderItem[];

  static create(input: CreateOrderCommand) {
    const order = new Order();
    order.client_id = input.client_id;
    order.items = input.items.map((item) => {
      const orderItem = new OrderItem();
      orderItem.product_id = item.product_id;
      orderItem.price = item.price;
      orderItem.quantity = item.quantity;
      return orderItem;
    });
    order.total = input.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    return order;
  }
}
