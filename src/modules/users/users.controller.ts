import { Controller, Post, Body} from '@nestjs/common';
import {  ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './users.service';
import { config } from 'src/configurations/config/envs';
import { UserRegisterDTO } from './DTO/input/user.dto';
import { AuthService } from '../auth/auth.service';
import { Passwords, User } from 'src/dataAccess/databases/postgresql/entities';
@ApiTags("users")
@Controller(`${config.url_selft_api}`)
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
    
    ) {}
  @Post('users')
  @ApiOperation({
    summary: 'Con este endpoint puede crear un usuario',
    description: 'endpoint para crear usuario en el sistema con el fin de usarlo para todas las necesidades del sistema'
  })
 async createUser(@Body() data: UserRegisterDTO) {
    const dataUser: User = await this.userService.createUser(data)
    const passwordEncrypted: Passwords = await this.authService.createPassword({
      is_vigent: true,
      password: data.password,
      user_id: dataUser.user_id,
      salt: '123',
    })
    const { token } = await this.authService.SignCreateToken({
      ...dataUser, 
      password: passwordEncrypted.password
    }) 
    const dataAuth = await this.authService.createAuth({
      access_token: token,
      expiration_date: new Date(),
      user_id: dataUser.user_id,

    })
    return {access_token: dataAuth.access_token}
  };

};
