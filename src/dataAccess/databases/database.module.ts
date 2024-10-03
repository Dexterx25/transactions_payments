import { Module } from '@nestjs/common';
import { dataBaseProviderCustom } from './database.service';
//import { MongoDatabaseModule } from './mongodb/database.module';
import {
  Auth, 
  User, 
  Passwords, 
} from 'src/dataAccess/databases/mongodb/entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    dataBaseProviderCustom,
    TypeOrmModule.forFeature([User, Auth, Passwords]),
    //PostgresDatabaseModule,
    // MongoDatabaseModule,
  ],
  exports: [
    dataBaseProviderCustom,
  ]
})
export class DatabaseModule {}
