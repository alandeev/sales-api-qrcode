import { EntityRepository, Repository } from "typeorm";
import Employee from "../entities/employee";

interface IGetByUsernameAndRestaurant {
  username: string
  restaurant_id: string
}

@EntityRepository(Employee)
class EmployeeRepository extends Repository<Employee> {
  public async getByUsernameAndRestaurant({
    username,
    restaurant_id
  }: IGetByUsernameAndRestaurant): Promise<Employee | undefined> {
    const employee = await this.findOne({
      where: { 
        username,
        restaurant_id
      }
    })

    return employee;
  }
}

export default EmployeeRepository;