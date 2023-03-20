import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { PrismaService } from '../../prisma/prisma.service';

// Included PrismaService Inside So I can Interact With Resolvers and Services
@Module({
  providers: [ProductsResolver, ProductsService, PrismaService],
})
export class ProductsModule {}
