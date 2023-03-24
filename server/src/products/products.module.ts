import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

// Included PrismaService Inside So I can Interact With Resolvers and Services
@Module({
  imports: [],
  providers: [
    ProductsResolver,
    ProductsService,
    PrismaService,
    UsersService,
    AuthService,
    JwtService,
  ],
  exports: [ProductsService],
})
export class ProductsModule {}
