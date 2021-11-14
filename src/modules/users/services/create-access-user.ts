import { getCustomRepository } from "typeorm"
import bcrypt from 'bcryptjs'
import UserRepository from "../typeorm/repositories/user-repository"
import { UnauthorizedError } from "@shared/errors"
import createAccessToken from "@shared/utils/create-access-token"
import envs from "@config/envs"

interface IDependencies {
  userRepository?: UserRepository
}

interface ICreateUser {
  username: string;
  password: string;
}

class CreateAccessUser {
  userRepository: UserRepository

  constructor(deps?: IDependencies) { 
    this.userRepository = deps?.userRepository ?? getCustomRepository(UserRepository)
  }

  public async execute(model: ICreateUser) {
    const user = await this.userRepository.getByUsername(model.username)
    if(!user) {
      console.warn({
        message: "User not found",
        username: model.username
      })
      
      throw new UnauthorizedError("Username or Password is invalid")
    }

    const isSamePassword = await bcrypt.compare(model.password, user.password)

    if(!isSamePassword) {
      console.warn({
        message: "Password is invalid",
        username: model.username
      })
      
      throw new UnauthorizedError("Username or Password is invalid")
    }

    const accessToken = createAccessToken({
      payload: { 
        user_id: user.id,
        permissions: user.permissions
      },
      expires_in: '1d',
      secret_key: envs.USER_SECRET_KEY
    })

    return {
      token: accessToken
    }
  }
}

export default CreateAccessUser;