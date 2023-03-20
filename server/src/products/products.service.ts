import { Injectable } from '@nestjs/common';

import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from 'prisma/prisma.service';
import { ProductCreateInput } from 'src/@generated/prisma-nestjs-graphql/product/product-create.input';
import { ProductUpdateInput } from 'src/@generated/prisma-nestjs-graphql/product/product-update.input';
import { OrderByParams } from 'src/graphql';

@Injectable()
export class ProductsService {
  // Using PrismaService to create product
  constructor(private prisma: PrismaService) {}

  create(createProductInput: ProductCreateInput) {
    return this.prisma.product.create({
      data: createProductInput,
    });
  }

  findAll(orderBy?: OrderByParams) {
    const { field, direction } = orderBy || {};

    return this.prisma.product.findMany({
      orderBy: { [field]: direction },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: ProductUpdateInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
