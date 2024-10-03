import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/dataAccess/databases/repositories";
import { UserRegisterDTO } from "./DTO/input/user.dto";
import { User } from "src/dataAccess/databases/mongodb/entities";
import { ObjectId } from 'mongodb';

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
  public async getUser(user_id: string): Promise<any>{
    const objectId = new ObjectId(user_id);
    const data = await this.userRepository.findOneData(objectId)
    return data
  };
};

