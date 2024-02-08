import { Module } from '@nestjs/common';
import { EpaycoPaymentGatewayAPIFY } from './epaycoFastify';
import { AxiosDataAccess } from '../recurses/axios';
import { ExceptionsModule } from 'src/configurations/exceptions';

@Module({
  imports: [ExceptionsModule],
  exports: [EpaycoPaymentGatewayAPIFY],
  providers: [EpaycoPaymentGatewayAPIFY, AxiosDataAccess],
})
export class ImplementationsModules {}
