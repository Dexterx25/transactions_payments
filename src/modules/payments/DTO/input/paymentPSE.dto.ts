import {
    ApiProperty,
  } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
  
 
export enum method_exc {
    'HEAVY' = 'heavy',
    'FASTER' = 'faster'
   }

  export class PaymentPSEPostDTO{
    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: '123123123',
      nullable: false,
      required: true,
      description: 'Bank Code Payment'
    })
    bank!: string;

    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: '100',
      nullable: false,
      required: true,
      description: 'Value payment'
    })
    value!: string;

    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: 'CC',
      nullable: false,
      required: true,
      description: 'Tipo de documento'
    })
    docType!: string;

    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: '100123123',
      nullable: false,
      required: true,
      description: 'Numero de documento'
    })
    docNumber!: string;


    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: 'Joe',
      nullable: false,
      required: true,
      description: 'Name customer that wanna make transaction'
    })
    name!: string;

    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: 'Doe',
      nullable: false,
      required: true,
      description: 'last name customer that wanna make transaction'
    })
    lastName!: string;


    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: 'Doe',
      nullable: false,
      required: true,
      description: 'Email customer that wanna make transaction'
    })
    email!: string;


    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: '3004050301',
      nullable: false,
      required: true,
      description: 'cellPhone customer that wanna make transaction'
    })
    cellPhone!: string;

    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: '10.203.123.1',
      nullable: false,
      required: true,
      description: 'ip customer that wanna make transaction'
    })
    ip?: string;


    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: 'www.asdasd.qwe.co',
      nullable: false,
      required: true,
      description: 'url response customer that wanna make transaction'
    })
    urlResponse?: string;

    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: '300123123',
      nullable: false,
      required: true,
      description: 'phone customer that wanna make transaction'
    })
    phone?: string;

    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: 'taxing',
      nullable: false,
      required: true,
      description: 'tax customer that wanna make transaction'
    })
    tax?: string;

    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: 'taxBase',
      nullable: false,
      required: true,
      description: 'taxBase customer that wanna make transaction'
    })
    taxBase?: string;

    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: 'description',
      nullable: false,
      required: true,
      description: 'description customer that wanna make transaction'
    })
    description?: string;

    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: 'invoice',
      nullable: false,
      required: true,
      description: 'invoice customer that wanna make transaction'
    })
    invoice?: string;

    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: 'currency',
      nullable: false,
      required: true,
      description: 'currency customer that wanna make transaction'
    })
    currency?: string;


    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: 'typePerson',
      nullable: false,
      required: true,
      description: 'typePerson customer that wanna make transaction'
    })
    typePerson?: string;


    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: 'typePerson',
      nullable: false,
      required: true,
      description: 'typePerson customer that wanna make transaction'
    })
    address?: string;

    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: 'urlConfirmation',
      nullable: false,
      required: true,
      description: 'urlConfirmation customer that wanna make transaction'
    })
    urlConfirmation?: string;

    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: 'methodConfimation',
      nullable: false,
      required: true,
      description: 'methodConfimation customer that wanna make transaction'
    })
    methodConfimation?: string;

    @IsNotEmpty()
    @ApiProperty({
      type: String,
      example: 1,
      nullable: false,
      required: true,
      description: 'extra1 customer that wanna make transaction'
    })
    extra1!: number
  }
