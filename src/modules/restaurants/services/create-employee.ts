import { NotFoundError } from "@shared/errors";
import { randomUUID } from "crypto";
import { getCustomRepository } from "typeorm";
import bcrypt from 'bcryptjs'
import EmployeeRepository from "../typeorm/repositories/employee-repository";

interface IDependencies {
  employeeRepositor: EmployeeRepository
}

interface IRequest {
  restaurant_id: string
  name: string
  username: string
  password: string
  permissions: string[]
}

class CreateEmployeeService {
  private employeeRepository: EmployeeRepository
  constructor(deps?: IDependencies) {
    this.employeeRepository = deps?.employeeRepositor ?? getCustomRepository(EmployeeRepository)
  }

  public async execute(model: IRequest) {
    const employeeAlreadyExists = await this.employeeRepository.getByUsernameAndRestaurant({
      username: model.username,
      restaurant_id: model.restaurant_id
    })

    if(employeeAlreadyExists) {
      console.warn({
        message: "employee already exist",
        model
      })

      throw new NotFoundError("employee already exist")
    }

    const passwordHash = await bcrypt.hash(model.password, 8)

    const newEmployee = this.employeeRepository.create({
      id: randomUUID(),
      name: model.name,
      restaurant_id: model.restaurant_id,
      username: model.username,
      password: passwordHash,
      permissions: model.permissions
    })

    await this.employeeRepository.save(newEmployee)
 
    return newEmployee;
  }
}

export default CreateEmployeeService;