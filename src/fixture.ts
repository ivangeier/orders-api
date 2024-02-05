import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert([
    {
      id: '6678e5e2-3a5b-4a6b-8b6b-8b6b8b6b8b6b',
      name: 'Product 1',
      description: 'Product 1 description',
      price: 100,
      image_url: 'http://localhotst:9000/products/1.png',
    },
    {
      id: '2f5cf8d1-987c-4e3d-af9a-af9aaf9aaf9a',
      name: 'Product 2',
      description: 'Product 2 description',
      price: 150,
      image_url: 'http://localhotst:9000/products/2.png',
    },
    {
      id: '4bcf7a9e-654f-4c92-868d-868d868d868d',
      name: 'Product 3',
      description: 'Product 3 description',
      price: 120,
      image_url: 'http://localhotst:9000/products/3.png',
    },
    {
      id: '6d8c0c9b-f5c2-4398-aa3e-aa3eaa3eaa3e',
      name: 'Product 4',
      description: 'Product 4 description',
      price: 80,
      image_url: 'http://localhotst:9000/products/4.png',
    },
    {
      id: '0d7e6f5a-b4c3-4d2e-a1b0-a1b0a1b0a1b0',
      name: 'Product 5',
      description: 'Product 5 description',
      price: 90,
      image_url: 'http://localhotst:9000/products/5.png',
    },
    {
      id: '1a2b3c4d-5e6f-789a-b1c2-b1c2b1c2b1c2',
      name: 'Product 6',
      description: 'Product 6 description',
      price: 110,
      image_url: 'http://localhotst:9000/products/6.png',
    },
    {
      id: '3f4e5d6c-7b8a-9b0c-d1e2-d1e2d1e2d1e2',
      name: 'Product 7',
      description: 'Product 7 description',
      price: 130,
      image_url: 'http://localhotst:9000/products/7.png',
    },
    {
      id: '8c9b0a1f-2e3d-4c5b-6a7b-6a7b6a7b6a7b',
      name: 'Product 8',
      description: 'Product 8 description',
      price: 140,
      image_url: 'http://localhotst:9000/products/8.png',
    },
    {
      id: '9b0c1d2e-3f4e-5d6c-7b8a-7b8a7b8a7b8a',
      name: 'Product 9',
      description: 'Product 9 description',
      price: 160,
      image_url: 'http://localhotst:9000/products/9.png',
    },
    {
      id: '0a1b2c3d-4e5f-6789-a1b2-a1b2a1b2a1b2',
      name: 'Product 10',
      description: 'Product 10 description',
      price: 170,
      image_url: 'http://localhotst:9000/products/10.png',
    },
    {
      id: '1b2c3d4e-5f6a-789a-b1c2-b1c2b1c2b1c2',
      name: 'Product 11',
      description: 'Product 11 description',
      price: 180,
      image_url: 'http://localhotst:9000/products/11.png',
    },
    {
      id: '2c3d4e5f-6a7b-89ab-c1d2-c1d2c1d2c1d2',
      name: 'Product 12',
      description: 'Product 12 description',
      price: 190,
      image_url: 'http://localhotst:9000/products/12.png',
    },
    {
      id: '3d4e5f6a-7b8a-9abc-d1e2-d1e2d1e2d1e2',
      name: 'Product 13',
      description: 'Product 13 description',
      price: 200,
      image_url: 'http://localhotst:9000/products/13.png',
    },
    {
      id: '4e5f6a7b-8a9b-c1d2-e3f4-e3f4e3f4e3f4',
      name: 'Product 14',
      description: 'Product 14 description',
      price: 120,
      image_url: 'http://localhotst:9000/products/14.png',
    },
    {
      id: '5f6a7b8a-9b0c-d2e3-f4e5-f4e5f4e5f4e5',
      name: 'Product 15',
      description: 'Product 15 description',
      price: 100,
      image_url: 'http://localhotst:9000/products/15.png',
    },
    {
      id: '6a7b8a9b-0c1d-e2f3-g4h5-g4h5g4h5g4h5',
      name: 'Product 16',
      description: 'Product 16 description',
      price: 80,
      image_url: 'http://localhotst:9000/products/16.png',
    },
    {
      id: '7b8a9b0c-1d2e-3f4g-h5i6-h5i6h5i6h5i6',
      name: 'Product 17',
      description: 'Product 17 description',
      price: 90,
      image_url: 'http://localhotst:9000/products/17.png',
    },
    {
      id: '8a9b0c1d-2e3f-4g5h-i6j7-i6j7i6j7i6j7',
      name: 'Product 18',
      description: 'Product 18 description',
      price: 110,
      image_url: 'http://localhotst:9000/products/18.png',
    },
  ]);

  await app.close();
}

bootstrap();
