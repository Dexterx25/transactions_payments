import { Injectable } from "@nestjs/common";
import { PaymentPSEPostDTO } from "./DTO/input";

@Injectable()
export class PaymentService {
  constructor(
  ) {}

  public async generatePaymentTest(): Promise<string>{
    return Promise.resolve('ok')
  }

  public async generatePaymentData(data: PaymentPSEPostDTO): Promise<PaymentPSEPostDTO>{
    return Promise.resolve(data)
  }
    
};

