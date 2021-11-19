import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddFKInProductToCategory1637285880618 implements MigrationInterface {
  private column = new TableColumn({
    name: "category_id",
    type: "uuid",
    isNullable: true
  })

  private add_fk = new TableForeignKey({
    name: "CategoryRestaurantIdFK",
    referencedTableName: "restaurants",
    referencedColumnNames: ["id"],
    columnNames: ["restaurant_id"]
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn("products", this.column)
    await queryRunner.createForeignKey("products", this.add_fk)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("products", "CategoryRestaurantIdFK")
    await queryRunner.dropColumn("products", "category_id")
  }
}
