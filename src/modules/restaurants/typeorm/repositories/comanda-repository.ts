import { EntityRepository, Repository } from "typeorm";
import Comanda from "../entities/comanda";

@EntityRepository(Comanda)
class ComandaRepository extends Repository<Comanda> {
  public async getByDeviceID (device_id: string) {
    const comanda = await this.findOne({
      where: { device_id }
    })

    return comanda;
  }
}

export default ComandaRepository