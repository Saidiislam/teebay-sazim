import {
  Resolver,
  ResolveField,
  Parent,
  Query,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input';
import { UserUpdateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-update.input';
import { ProductsService } from '../../src/products/products.service';

@Resolver('User')
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private productsService: ProductsService,
  ) {}

  @Mutation('createUser')
  async create(@Args('createUserInput') createUserInput: UserCreateInput) {
    const created = await this.usersService.create(createUserInput);
    return created;
  }

  @Query('users')
  findAll() {
    return this.usersService.findAll();
  }

  @Query('user')
  findOne(@Args('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation('updateUser')
  async update(
    @Args('id') id: number,
    @Args('updateUserInput') updateUserInput: UserUpdateInput,
  ) {
    const updated = await this.usersService.update(id, updateUserInput);
    return updated;
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.usersService.remove(id);
  }

  // To nest all the products under user
  @ResolveField('products')
  async getProducts(@Parent() user) {
    const { id } = user;
    return this.productsService.findAll(id);
  }
}