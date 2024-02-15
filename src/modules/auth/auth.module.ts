import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JWTModule } from 'src/configurations/jwt';
import { ConfigModule } from '@nestjs/config';
import { PasswordsRepository } from 'src/dataAccess/databases/repositories/userGroupsRepositories/password.repository';
import { AuthRepository } from 'src/dataAccess/databases/repositories';
import { DatabaseModule } from 'src/dataAccess/databases';

@Module({
  controllers: [AuthController],
  imports: [DatabaseModule, JWTModule, ConfigModule],
  providers: [AuthRepository, PasswordsRepository, AuthService],
  exports: [AuthService],

})
export class AuthModule {}