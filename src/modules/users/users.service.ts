import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/dataAccess/databases/repositories";
import { UserRegisterDTO } from "./DTO/input/user.dto";
import { User } from "src/dataAccess/databases/postgresql/entities";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
 
  public async createUser(data: UserRegisterDTO): Promise<User>{
    const { names, nikname, surnames } = data;
    return await this.userRepository.create(
      names,
      nikname,
      surnames
    )
  };
};

