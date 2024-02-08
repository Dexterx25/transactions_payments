import { Injectable } from '@nestjs/common';
import {config} from '../../configurations/config/envs'
import { AxiosDataAccess } from '../recurses/axios';

const configEpayco = config.integrations.epayco;

 interface dataCreateRequestToken {
     token: string
 }
@Injectable()
export class EpaycoPaymentGatewayAPIFY {
    protected token
    constructor(
        private readonly axiosDataAccess: AxiosDataAccess,
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

}