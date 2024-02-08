import { Body, Controller, Get, HttpCode, HttpStatus, Post} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { PaymentService } from './payment.service';
import { config } from 'src/configurations/config/envs';
import { PaymentResponseDTO } from './DTO/output/paymentGetDTO';
import { PaymentPSEPostDTO } from './DTO/input';
interface interfaceToken {
  token: string
}
const stastsExampleRes: interfaceToken = {
  token: 'eyasdasdeqweqwsdnknvk.asdqwe@asknaksndd_kknasdnkas'
}
@ApiTags("payments")
@Controller(`${config.url_selft_api}`)
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService,
    ) {}

  @Get('payments')
  @ApiOkResponse({
    status: HttpStatus.OK,
    schema: {
      $ref: getSchemaPath(PaymentResponseDTO),
      example: stastsExampleRes
  }
  })
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Endpoint to get token and seting to memory app',
    description: `Endpoint to get token epayco and set into memory using credentials internal the app`,
  })
 async generatePaymentTest(): Promise<string> {
      const data = await this.paymentService.generatePaymentTest()
      return data
  };


  @Post('payments/pse')
  @ApiOkResponse({
    status: HttpStatus.CREATED,
    schema: {
        $ref: getSchemaPath(PaymentResponseDTO),
        example: {
            statusCode: 200,
            message: 'OK, you could be recluted!',
            error: false,
          },
    }
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    schema: {
        $ref: getSchemaPath(PaymentResponseDTO),
        example: {
            statusCode: 400,
            message: ['validation(s) error'],
            error: true,
          },
    }
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    schema: {
        $ref: getSchemaPath(PaymentResponseDTO),
        example: {
            statusCode: 403,
            message: 'shouldnt be recluter',
            error: true,
          },
    }
  })
  @ApiOperation({
    summary: 'Endpoint to send information to create transaction',
    description: `Endpoint to send information to create transaction with epayco paymentGateway`,
  })
 async generatePaymentData(@Body() data: PaymentPSEPostDTO): Promise<PaymentPSEPostDTO> {
      return await this.paymentService.generatePaymentData(data)
  };
};
