import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { OrderByParams } from 'src/graphql';
import { ProductCreateInput } from 'src/@generated/prisma-nestjs-graphql/product/product-create.input';
import { ProductUpdateInput } from 'src/@generated/prisma-nestjs-graphql/product/product-update.input';
import { UserEntity } from 'src/common/decorators/user.decorator';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { UsersService } from 'src/users/users.service';

@Resolver('Product')
export class ProductsResolver {
  constructor(
    private productsService: ProductsService,
    private usersService: UsersService,
  ) {}

  @Mutation('createProduct')
  async create(
    @UserEntity() user: User,
    @Args('createProductInput') createProductInput: ProductCreateInput,
  ) {
    const created = await this.productsService.create(createProductInput);

    return created;
  }

  @Mutation('updateProduct')
  async update(
    @Args('id') id: number,
    @Args('createUpdateInput') updateProductInput: ProductUpdateInput,
  ) {
    const updated = await this.productsService.update(id, updateProductInput);
    return updated;
  }

  @Mutation('removeProduct')
  remove(@Args('id') id: number) {
    return this.productsService.remove(id);
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
}
