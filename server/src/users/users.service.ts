import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { OrderByParams } from 'src/graphql';
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input';
import { UserUpdateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-update.input';

@Injectable()
export class UsersService {
  // Using PrismaService to fetch user
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany({ include: { products: true } });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { products: true },
    });
  }

  async findEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  create(createUserInput: UserCreateInput) {
    return this.prisma.user.create({
      data: createUserInput,
    });
  }

  async update(id: number, updateUserInput: UserUpdateInput) {
    const { products, ...rest } = updateUserInput;
    const updateData: any = rest;
    return await this.prisma.user.update({
      where: { id },
      data: updateData,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
