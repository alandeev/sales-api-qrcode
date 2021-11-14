import { getCustomRepository } from "typeorm"
import bcrypt from 'bcryptjs'
import ClientRepository from "../typeorm/repositories/client-repository"
import { UnauthorizedError } from "@shared/errors"
import createAccessToken from "@shared/utils/create-access-token"
import envs from "@config/envs"

interface IDependencies {
  clientRepository?: ClientRepository
}

interface ICreateUser {
  email: string;
  password: string;
}

class CreateAccessClient {
  clientRepository: ClientRepository

  constructor(deps?: IDependencies) { 
    this.clientRepository = deps?.clientRepository ?? getCustomRepository(ClientRepository)
  }

  public async execute(model: ICreateUser) {
    const client = await this.clientRepository.getByEmail(model.email)
    if(!client) {
      console.warn({
        message: "Client not found",
        username: model.email
      })
      
      throw new UnauthorizedError("Email or Password is invalid")
    }

    const isSamePassword = await bcrypt.compare(model.password, client.password)

    if(!isSamePassword) {
      console.warn({
        message: "Password is invalid",
        username: model.email
      })
      
      throw new UnauthorizedError("Email or Password is invalid")
    }

    const accessToken = createAccessToken({
      payload: { 
        id: client.id,
        permissions: [] // change after to implements permissions in clients
      },
      expires_in: '1d',
      secret_key: envs.CLIENT_SECRET_KEY
    })

    return {
      token: accessToken
    }
  }
}

export default CreateAccessClient;