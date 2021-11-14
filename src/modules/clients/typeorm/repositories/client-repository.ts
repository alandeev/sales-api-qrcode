import { EntityRepository, Repository } from "typeorm";
import Client from "../entities/client";

@EntityRepository(Client)
class ClientRepository extends Repository<Client> {
  public async getByEmail(email: string): Promise<Client | undefined> {
    const client = await this.findOne({
      where: { email }
    })
    
    return client;
  }
}

export default ClientRepository;