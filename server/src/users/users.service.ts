import {
  BadRequestException,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { OrderByParams } from 'src/graphql';
import * as bcrypt from 'bcrypt';
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input';
import { UserUpdateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-update.input';
import { AuthService } from 'src/auth/auth.service';
import { UserLoginInput } from './dto/login-user.input';

@Injectable()
export class UsersService {
  // Using PrismaService to fetch user
  constructor(
    private prisma: PrismaService,
    // @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

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

  // OK
  async loginUser(loginUserInput: UserLoginInput) {
    const user = await this.authService.validateUser(
      loginUserInput.email,
      loginUserInput.password,
    );
    if (!user) {
      throw new BadRequestException(`Email or password are invalid`);
    }
    const generateCreds = await this.authService.generateUserCredentials(user);

    return generateCreds;
  }
  /**
   * Registers new user to the DB
   * @param createUserInput
   */
  async create(createUserInput: UserCreateInput) {
    const saltOrRounds = 10;
    const password = createUserInput.password;
    createUserInput.password = await bcrypt.hash(password, saltOrRounds);
    return this.prisma.user.create({
      data: createUserInput,
    });
  }
  /**
   * Updates user basic credentials
   * @param updateUserInput
   */
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
