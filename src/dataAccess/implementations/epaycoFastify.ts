import { Injectable } from '@nestjs/common';
import {config} from '../../configurations/config/envs'
import { AxiosDataAccess } from '../recurses/axios';
import { PaymentPSEPostDTO } from 'src/modules/payments/DTO/input';
import { HandleErrorservice } from 'src/configurations/exceptions';
import { EnumErrorCodes } from 'src/configurations/exceptions/constants';
import { IResponseProcessPayment, IResponseProcessTransaction, dataCreateRequestToken } from './interfaces';

const configEpayco = config.integrations.epayco;
@Injectable()
export class EpaycoPaymentGatewayAPIFY {
    protected token
    constructor(
        private readonly axiosDataAccess: AxiosDataAccess,
        private readonly errorHandle: HandleErrorservice
        ){
    }
    async loginApify() {
          const data: dataCreateRequestToken  = await this.axiosDataAccess.createRequest({
            method: 'POST',
            url: `${configEpayco.url}/login`,
            headers: { 
                'Content-Type': 'application/json',
              },
            auth: {
                username: configEpayco.envs.publicKey,
                password: configEpayco.envs.privateKey,
            },
            data: ''
        })
        if(!data?.token) throw new Error('Not found Token')
        config.integrations.epayco['token'] = data.token
        return this.token = data.token
    }

    async processPayment(data: PaymentPSEPostDTO, typePaymentOrigin: string): Promise<IResponseProcessPayment> {
        const res: IResponseProcessTransaction | any = await this.axiosDataAccess.createRequest({
          method: 'POST',
          url: `${configEpayco.url}/payment/process/${typePaymentOrigin}`,
          headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.token || config.integrations.epayco['token'] }`
            },
          data: JSON.stringify(data)
      })
      if(!res) throw new Error('Not found data Payment')
      if(res.success === false) throw this.errorHandle.handleError({
        error: true,
        message: res.textResponse,
        statusCode: EnumErrorCodes.DATA_VALIDATION_ERROR,
        details: [...res.data.errors.map((i) => i.errorMessage)]
      })
      return res
  }

}