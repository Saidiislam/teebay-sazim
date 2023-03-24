import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ProductCreateInput } from 'src/@generated/prisma-nestjs-graphql/product/product-create.input';
import { ProductUpdateInput } from 'src/@generated/prisma-nestjs-graphql/product/product-update.input';
import { FilterByParams, OrderByParams } from 'src/graphql';

@Injectable()
export class ProductsService {
  // Using PrismaService to create product
  constructor(private prisma: PrismaService) {}

  create(createProductInput: ProductCreateInput) {
    return this.prisma.product.create({
      data: createProductInput,
    });
  }

  findAll(orderBy?: OrderByParams, filter?: FilterByParams) {
    const { field, direction } = orderBy || {};
    const { filterBy, filterValue } = filter || {};
    const whereClause = { [filterBy]: filterValue };
    return this.prisma.product.findMany({
      where: whereClause,
      orderBy: { [field]: direction },
    });
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
      include: { User: true },
    });
  }

  async update(id: number, updateProductInput: ProductUpdateInput) {
    const { categories, ...rest } = updateProductInput;
    const updateData: any = rest;
    if (categories) {
      updateData.categories = { set: categories };
    }
    return await this.prisma.product.update({
      where: { id },
      data: updateData,
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}
