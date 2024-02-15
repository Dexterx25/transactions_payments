import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { ConfigModule } from '@nestjs/config';
import { UserRepository } from 'src/dataAccess/databases/repositories';
import { AuthModule } from '../auth/auth.module';
import { DatabaseModule } from 'src/dataAccess/databases';

@Module({
  controllers: [UserController],
  imports: [DatabaseModule, AuthModule, ConfigModule],
  providers: [UserRepository, UserService],
  exports: [UserService],

})

export class UserModule {}