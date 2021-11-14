import { ValidationError } from "@shared/errors"
import { getCustomRepository } from "typeorm"
import ClientRepository from "../typeorm/repositories/client-repository"
import bcrypt from 'bcryptjs'

interface IDependencies {
  clientRepository?: ClientRepository
}

interface ICreateClient {
  created_by: string;
  name: string;
  email: string;
  password: string;
}

class CreateClientService {
  clientRepository: ClientRepository

  constructor(deps?: IDependencies) { 
    this.clientRepository = deps?.clientRepository ?? getCustomRepository(ClientRepository)
  }

  public async execute(model: ICreateClient) {
    const client = await this.clientRepository.getByEmail(model.email)
    
    if(client){
      throw new ValidationError('Client "email" already exists')
    }

    const passwordHash = await bcrypt.hash(model.password, 8)

    const newClient = this.clientRepository.create({
      created_by: model.created_by,
      name: model.name,
      email: model.email,
      password: passwordHash
    })    

    await this.clientRepository.save(newClient)

    return newClient
  }
}

export default CreateClientService;