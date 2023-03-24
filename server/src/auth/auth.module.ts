import { Logger, Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    forwardRef(() => UsersModule),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const logger = new Logger('JwtModule');
        const jwtSecret = configService.get<string>('JWT_SECRET');
        logger.log(`JWT secret: ${jwtSecret}`);

        return {
          secret: jwtSecret,
          signOptions: { expiresIn: '6000s' },
        };
      },
      inject: [ConfigService],
    }),
    // JwtModule.register({
    //   secret: 'YEasin',
    //   signOptions: { expiresIn: '1000s' },
    // }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
