import { NotFoundError } from "@shared/errors";
import { randomUUID } from "crypto";
import { getCustomRepository } from "typeorm";
import ComandaRepository from "../typeorm/repositories/comanda-repository";

interface IDependencies {
  comandaRepository: ComandaRepository
}

export type DeviceTypes = "nfc" | "qrcode"

interface IRequest {
  restaurant_id: string
  employee_id: string
  device_id: string
  device_type: DeviceTypes
}

class CreateComandaService {
  private comandaRepository: ComandaRepository
  constructor(deps?: IDependencies) {
    this.comandaRepository = deps?.comandaRepository ?? getCustomRepository(ComandaRepository)
  }

  public async execute(model: IRequest) {
    const comandaAlreadyExist = await this.comandaRepository.getByDeviceID(model.device_id)

    if(comandaAlreadyExist) {
      console.warn({
        message: "comanda already exist",
        model
      })

      throw new NotFoundError("comanda already exist")
    }
 
    const command = this.comandaRepository.create({
      id: randomUUID(),
      device_id: model.device_id,
      device_type: model.device_type,
      employee_id: model.employee_id,
      restaurant_id: model.restaurant_id
    })

    await this.comandaRepository.save(command)

    return command
  }
}

export default CreateComandaService;