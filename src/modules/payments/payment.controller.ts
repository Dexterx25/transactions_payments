import { Controller, Get, HttpCode, HttpStatus} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaymentService } from './payment.service';
import { config } from 'src/configurations/config/envs';
// import * as dotenv from 'dotenv';
// dotenv.config();

@ApiTags("payments")
@Controller(`${config.url_selft_api}`)
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService,
    ) {}

  @Get('payments')
  @ApiResponse({
    status: HttpStatus.OK,
    schema: {
    }
  })
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Endpoint',
    description: `dsss`,
  })
 async getStat(): Promise<any | null> {
      const data = await this.paymentService.generatePayment()
      return data
  };
};
