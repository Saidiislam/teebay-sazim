import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { OrderByParams } from 'src/graphql';
import { ProductCreateInput } from 'src/@generated/prisma-nestjs-graphql/product/product-create.input';
import { ProductUpdateInput } from 'src/@generated/prisma-nestjs-graphql/product/product-update.input';

@Resolver('Product')
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation('createProduct')
  async create(
    @Args('createProductInput') createProductInput: ProductCreateInput,
  ) {
    const created = await this.productsService.create(createProductInput);

    return created;
  }

  @Query('products')
  findAll(
    @Args('orderBy')
    orderBy?: OrderByParams,
  ) {
    return this.productsService.findAll(orderBy);
  }

  @Query('product')
  findOne(@Args('id') id: number) {
    return this.productsService.findOne(id);
  }

  // <=== TO DO ===>
  @Mutation('updateProduct')
  update(
    @Args('id') id: number,
    @Args('updateProductInput') updateProductInput: ProductUpdateInput,
  ) {
    return this.productsService.update(id, updateProductInput);
  }

  @Mutation('removeProduct')
  remove(@Args('id') id: number) {
    return this.productsService.remove(id);
  }
}
