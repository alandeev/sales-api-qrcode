import { EntityRepository, Repository } from "typeorm";
import Client from "../entities/client";

@EntityRepository(Client)
class ClientRepository extends Repository<Client> {
  public async getByEmail(Clientname: string): Promise<Client | undefined> {
    const client = await this.findOne({
      where: { Clientname }
    })
    
    return client;
  }
}

export default ClientRepository;