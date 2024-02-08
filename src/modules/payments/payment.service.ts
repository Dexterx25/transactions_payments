import { Injectable } from "@nestjs/common";
import { PaymentPSEPostDTO } from "./DTO/input";
import { EpaycoPaymentGatewayAPIFY } from "src/dataAccess/implementations/epaycoFastify";

@Injectable()
export class PaymentService {
  constructor(
    private readonly epaycoPaymentGatewayApify: EpaycoPaymentGatewayAPIFY
  ) {}

  public async generatePaymentTest(): Promise<string>{
    return Promise.resolve('ok')
  }

  public async generatePaymentData(data: PaymentPSEPostDTO, object: string): Promise<any>{
    const dataReturn = await this.epaycoPaymentGatewayApify.processPayment(data, object) 
    return dataReturn;
  }
    
};

