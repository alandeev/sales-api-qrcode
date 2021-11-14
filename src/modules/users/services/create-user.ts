import { getCustomRepository } from "typeorm"
import bcrypt from 'bcryptjs'
import BaseError from "@shared/errors/base-error"
import UserRepository from "../typeorm/repositories/user-repository"

interface IDependencies {
  userRepository?: UserRepository
}

interface ICreateUser {
  name: string;
  username: string;
  password: string;
}

class CreateUserService {
  userRepository: UserRepository

  constructor(deps?: IDependencies) { 
    this.userRepository = deps?.userRepository ?? getCustomRepository(UserRepository)
  }

  public async execute(model: ICreateUser) {
    const userExist = await this.userRepository.getByUsername(model.username)
    if(userExist) {
      console.warn({
        message: "User already exists",
        model
      })
      
      throw new BaseError(400, "User already exists")
    }

    const passwordHash = await bcrypt.hash(model.password, 8)

    const newUser = this.userRepository.create({
      name: model.name,
      username: model.username,
      password: passwordHash,
      permissions: []
    })    

    await this.userRepository.save(newUser)

    return newUser
  }
}

export default CreateUserService;