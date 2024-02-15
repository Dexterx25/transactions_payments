import { Injectable } from "@nestjs/common";
import { AuthRepository } from "src/dataAccess/databases/repositories";
import { Passwords } from "src/dataAccess/databases/postgresql/entities";
import { JWTService } from "src/configurations/jwt";
import { EncryptPassword } from "src/utils/encryptors";
import { PasswordsRepository } from "src/dataAccess/databases/repositories/userGroupsRepositories/password.repository";
import { IUser } from "src/dataAccess/databases/postgresql/entities";
interface IUserToSignToken extends IUser {
     password: string
}
export interface IPasswords {
  password: string,
  salt: string,
  is_vigent: boolean,
  user_id: any
}

@Injectable()
export class AuthService {
  constructor(
      private readonly authRepository: AuthRepository,
      private readonly passwordRepository: PasswordsRepository,
      private readonly jwtService: JWTService
    ) {}
 
  public async createAuth({
    access_token,
    expiration_date,
    user_id
  }) {
    return await this.authRepository.create({
      access_token,
      expiration_date,
      user_id,
    })
  }
  public async createPassword(data: IPasswords): Promise<Passwords> {
      const passwordEncrypted = EncryptPassword(data.password!)
      const intance = await this.passwordRepository.create({
        ...data,
        password: passwordEncrypted
      })
      return intance 
  }
  
  public async SignCreateToken(userData: IUserToSignToken ) {
      const tokenAndRefreshToken = await this.jwtService.signToken(userData)
      return tokenAndRefreshToken
  }

/*   async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({where: {email: email}});
    if(user?.id){
      const auth = await this.authRepository.findOne({where:{user_id:user.id}}) 
      const areEqual =  await bcrypt.compare(password, auth?.password!)
    if(areEqual === true){
      console.log('SI ES IGUAL-->')
      return await this.SignCreateToken(user)
    }
    } else {
        throw new HttpException({
          message: 'Email de usuario no encontrado',
          status: HttpStatus.BAD_REQUEST,
          Error: Error
        }, HttpStatus.BAD_REQUEST) 
      
      }
  } */
};

