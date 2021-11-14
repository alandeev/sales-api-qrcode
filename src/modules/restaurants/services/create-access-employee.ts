import { UnauthorizedError } from "@shared/errors";
import { getCustomRepository } from "typeorm";
import EmployeeRepository from "../typeorm/repositories/employee-repository";
import bcrypt from 'bcryptjs'
import envs from "@config/envs"
import createAccessToken from "@shared/utils/create-access-token";

interface IDependencies {
  employeeRepository?: EmployeeRepository
}

interface IRequest {
  username: string
  password: string
}

class CreateAccessEmployee {
  private employeeRepository: EmployeeRepository
  constructor(deps?: IDependencies) {
    this.employeeRepository = deps?.employeeRepository ?? getCustomRepository(EmployeeRepository)
  }

  public async execute(model: IRequest) {
    const employee = await this.employeeRepository.getByUsername(model.username)
    if(!employee) {
      console.warn({
        message: "employee not found",
        username: model.username
      })
      
      throw new UnauthorizedError("Username or Password is invalid")
    }

    const isSamePassword = await bcrypt.compare(model.password, employee.password)

    if(!isSamePassword) {
      console.warn({
        message: "Password is invalid",
        username: model.username
      })
      
      throw new UnauthorizedError("Username or Password is invalid")
    }

    const accessToken = createAccessToken({
      payload: { 
        id: employee.id,
        permissions: employee.permissions
      },
      expires_in: '1d',
      secret_key: envs.EMPLOYEE_SECRET_KEY
    })

    return {
      token: accessToken
    }
  }
}

export default CreateAccessEmployee