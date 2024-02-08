import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { EpaycoPaymentGatewayAPIFY } from 'src/dataAccess/implementations/epaycoFastify';

@Injectable()
export class EpaycoTokenInitialization implements NestMiddleware {
     constructor(
          private readonly epaycohttpapify: EpaycoPaymentGatewayAPIFY
      ) {}
   async use(_req: Request, _res: Response, next: NextFunction) {
     await this.epaycohttpapify.loginApify()
     next()
  }
}
