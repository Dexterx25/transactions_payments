import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { config } from 'src/configurations/config/envs';

@ApiTags("auth")
@Controller(`${config.url_selft_api}`)
export class AuthController {
  constructor() {}
  @Post('register')
  @ApiOperation({
    summary: 'Con este endpoint puedes registrar cuenta de usuario',
  })
 async registerAdmin(
    @Body() _data: any
  ) {
   
  };

  @Post('login')
  @ApiOperation({
    summary: 'Con este endpoint se puede logear el usuario registrado',
  })
 async login(
    @Body() _data: any
  ) {
    console.log('login')
  };

};
