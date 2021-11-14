import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Restaurants1636886400122 implements MigrationInterface {
  public table = new Table({
    name: "restaurants",
    columns: [
      {
        name: "id",
        type: "uuid",
        isPrimary: true,
        generationStrategy: "uuid"
      },
      {
        name: "client_id", // owner_id
        type: "uuid",
        isNullable: false
      },
      {
        name: "name",
        type: "varchar",
        isNullable: false,
      },
      {
        name: "status",
        type: "bool",
        default: false
      },
      {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
      },
    ],
    foreignKeys: [
      {
        name: "RestaurantClientIdFK",
        referencedTableName: "clients",
        referencedColumnNames: ["id"],
        columnNames: ["client_id"],
      }
    ]
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("restaurants")
  }
}
