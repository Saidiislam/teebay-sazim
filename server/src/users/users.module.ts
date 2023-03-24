import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ProductsService } from 'src/products/products.service';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    UsersResolver,
    UsersService,
    PrismaService,
    ProductsService,
    AuthService,
    AuthModule,
    JwtService,
  ],
  exports: [UsersService],
})
export class UsersModule {}
