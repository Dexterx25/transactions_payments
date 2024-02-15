import { Module } from '@nestjs/common';
import { dataBaseProviderCustom } from './database.service';
//import { MongoDatabaseModule } from './mongodb/database.module';
import {
  Auth, 
  User, 
  Passwords, 
  AuthRefresh, 
  Products, 
  ProductsUsers, 
  Roles, 
  RolesUsers, 
  Timestamps, 
  TypeDocument, 
  UserDetails} from 'src/dataAccess/databases/postgresql/entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    dataBaseProviderCustom,
    TypeOrmModule.forFeature([User, Auth, Passwords, Timestamps, AuthRefresh, Products, ProductsUsers, Roles, RolesUsers, TypeDocument, UserDetails]),
    //PostgresDatabaseModule,
    // MongoDatabaseModule,
  ],
  exports: [
    dataBaseProviderCustom,
  ]
})
export class DatabaseModule {}
