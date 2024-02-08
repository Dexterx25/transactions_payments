import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { EpaycoTokenInitialization } from './middleware/epayco';
import { ImplementationsModules } from 'src/dataAccess/implementations/implementations.module';

@Module({
  imports: [
    ImplementationsModules,
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
  exports: [PaymentService],
})
export class PaymentModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(EpaycoTokenInitialization)
      .forRoutes({path: `${process.env.URL_SELFT_API}/payments`, method: RequestMethod.ALL})
    }
  }