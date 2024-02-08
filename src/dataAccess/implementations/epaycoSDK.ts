const epayco = require('epayco-sdk-node');
import {config} from '../../configurations/config/envs'



export class EpaycoPaymentGatewaySDK {
    protected handel
    constructor(){
        this.handel = epayco((config.integrations.epayco))
    }

}