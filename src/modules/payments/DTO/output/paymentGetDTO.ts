import { HttpStatus } from "@nestjs/common";
import {
    ApiProperty,
  } from "@nestjs/swagger";
import { ApiResponseDTO } from "src/common/DTOCommon/output";
  
 
  export class PaymentResponseDTO implements ApiResponseDTO{
    @ApiProperty({
        type: String,
        description: 'Status code Response'
      })
      statusCode!: HttpStatus;
  
      @ApiProperty({
          type: String,
          description: 'message(s) to use in response'
        })
        message!: string | string[];
        
  
      @ApiProperty({
          type: String,
          description: 'boolean or name error identificator'
        })
        error!:  boolean | string;
  }
