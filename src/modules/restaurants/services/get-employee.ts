import { NotFoundError } from "@shared/errors"
import { getCustomRepository } from "typeorm"
import EmployeeRepository from "../typeorm/repositories/employee-repository"

interface IRequest {
  employee_id: string
}

interface IDependencies {
  employeeRepository: EmployeeRepository
}

class GetEmployeeService {
  private employeeRepository: EmployeeRepository
  constructor(deps?: IDependencies) {
    this.employeeRepository = deps?.employeeRepository ?? getCustomRepository(EmployeeRepository)
  }

  public async execute(model: IRequest) {
    const employee = await this.employeeRepository.findOne(model.employee_id)

    if(!employee) {
      console.warn({
        message: "employee not found",
        model
      })

      throw new NotFoundError("employee not found")
    }

    return employee;
  }
}

export default GetEmployeeService;