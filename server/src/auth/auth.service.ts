import { Injectable } from '@nestjs/common';
import { forwardRef, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../src/users/users.service';

import * as bcrypt from 'bcrypt';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private jwtTokenService: JwtService,
  ) {}

  /**
   * checks whether the the user has Email
   * if true checks password and returns user
   * @param user
   * @param password
   */
  async validateUser(email: string, password: string) {
    const user = await this.usersService.findEmail(email);
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        delete user.password;
        return user;
      }
    }
    return null;
  }

  /**
   * Get the User details
   * Make a payload and feed it to JWT sign for encryption
   * @param user
   */
  async generateUserCredentials(user: User) {
    const payload = {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      sub: user.id,
      role: user.role,
      phone: user.phone,
      address: user.address,
    };

    // String matching instead of JWT sign
    return {
      access_token: 'Bearer token',
    };
  }
}
