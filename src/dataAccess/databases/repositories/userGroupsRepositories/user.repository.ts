import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/dataAccess/databases/mongodb/entities';
import { MongoRepository } from 'typeorm';
import { RepositoryAbs } from '../abstractRepositoryMethdos';
import { ObjectId } from 'mongodb';

@Injectable()
export class UserRepository extends RepositoryAbs {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: MongoRepository<User>,
    ){super()}
    async create(names, nikname, surnames,
        ): Promise<any> {
     const intanceUser = await this.userRepository.create({
        names,
        nikname,
        surnames,
     })
     return await this.userRepository.save(intanceUser)   
    }
    async findOneData(user_id: ObjectId): Promise<any> {
        return await this.userRepository.aggregate([
            {
                $match: { _id: user_id } // Asegúrate de que `user_id` sea el ObjectId correcto del usuario
            },
            {
                $lookup: {
                    from: 'test_app_auth', // Asegúrate de que el nombre de la colección sea correcto
                    localField: '_id', // Este debe ser el campo en la colección de usuarios
                    foreignField: 'user_id', // Este debe ser el campo en la colección de autenticaciones
                    as: 'auths' // Este será el nombre del nuevo campo que contendrá los registros encontrados
                }
            },
            {
                $unwind: {
                    path: '$auths', // Descompone el array de `auths` en documentos individuales
                    preserveNullAndEmptyArrays: true // Esto asegura que aún se devuelva el documento del usuario si no hay auths
                }
            }
        ], ).toArray();
        
    }
}
