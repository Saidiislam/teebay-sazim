import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ProductsService } from 'src/products/products.service';

@Module({
  providers: [UsersResolver, UsersService, PrismaService, ProductsService],
  exports: [UsersService],
})
export class UsersModule {}
