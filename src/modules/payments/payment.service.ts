import { Injectable } from "@nestjs/common";

@Injectable()
export class PaymentService {
  constructor(
  ) {}

  public async generatePayment(): Promise<string>{
    return Promise.resolve('ok')
  }
    
};

