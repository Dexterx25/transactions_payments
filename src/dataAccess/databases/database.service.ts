import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { dbSet } from "src/utils/types";
import {
  Auth, 
  User, 
  Passwords, 
} from 'src/dataAccess/databases/mongodb/entities';
export const dataBaseProviderCustom =  TypeOrmModule.forRootAsync({
    imports: [ConfigModule.forRoot({})],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      const dataConnection: any = {
        type: dbSet,
        host: configService.get<string>("HOSTDB"),
        port: configService.get<number>("PORTDB"),
        database: configService.get<string>("NAMEDB"),
        authSource: configService.get<string>("AUTHSOURCEDB"),
        entities: [User, Auth, Passwords],
      }
      if(configService.get<string>("USERNAME")) dataConnection.username = configService.get<string>("USERNAME")
      if(configService.get<string>("PASSWORDDB")) dataConnection.password = configService.get<string>("PASSWORDDB")
      console.log('dataConnection-->', dataConnection)
      return dataConnection
    },
  });