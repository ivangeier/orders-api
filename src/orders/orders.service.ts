import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    const productsIds = createOrderDto.items.map((item) => item.product_id);
    //remove duplicated products
    const uniqueProductIds = [...new Set(productsIds)];
    const products = await this.productRepo.findBy({
      id: In(uniqueProductIds),
    });

    if (products.length !== uniqueProductIds.length) {
      throw new Error(
        `Missing products in the list, Given products: ${productsIds}, Found products: ${products.map((product) => product.id)}`,
      );
    }

    const order = Order.create({
      client_id: 1,
      items: createOrderDto.items.map((item) => {
        const product = products.find(
          (product) => product.id === item.product_id,
        );
        return {
          product_id: item.product_id,
          quantity: item.quantity,
          price: product.price,
        };
      }),
    });

    await this.orderRepo.save(order);

    return order;
  }

  findAll() {
    return this.orderRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }
}
