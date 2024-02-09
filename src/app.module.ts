// require('newrelic')
import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/dataAccess/databases";
import { PaymentModule } from "./modules/payments/payment.module";
import { ImplementationsModules } from "./dataAccess/implementations/implementations.module";
import { ExceptionsModule } from "./configurations/exceptions";
//import { WinstonModule } from 'nest-winston';
// const winston =  require('winston');
// const newrelicFormatter = require('@newrelic/winston-enricher')(winston)

import * as dotenv from 'dotenv';
dotenv.config();


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    PaymentModule,
    ImplementationsModules,
    ExceptionsModule,
    // WinstonModule.forRoot({
    //   level: 'info',
    //   format: winston.format.combine(
    //     winston.format.label({label: 'test'}),
    //     winston.format.colorize({ all: true }),
    //     winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    //     newrelicFormatter(),
    //     winston.format.printf(({ level, timestamp, message }) => {
    //       console.log('prinf')
    //         return `${timestamp} [${level}] - ${message}`;
    //     })
    // ),
    // transports: [new winston.transports.Console()],
    // }),
  ],
})
export class AppModule {}
 