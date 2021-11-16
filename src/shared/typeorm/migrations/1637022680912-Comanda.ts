import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Comanda1637022680912 implements MigrationInterface {
  private table = new Table({
    name: "comandas",
    columns: [
      {
        name: "id",
        type: "uuid",
        isPrimary: true,
        generationStrategy: "uuid"
      },
      {
        name: "device_type",
        type: "varchar",
        isNullable: false
      },
      {
        name: "device_id",
        type: "varchar",
        isNullable: false
      },
      {
        name: "restaurant_id",
        type: "uuid",
        isNullable: false
      },
      {
        name: "employee_id",
        type: "uuid",
        isNullable: false
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
        name: "ComandaRestaurantIdFK",
        referencedTableName: "restaurants",
        referencedColumnNames: ["id"],
        columnNames: ["restaurant_id"],
      },
      {
        name: "ComandaEmployeeIdFK",
        referencedTableName: "employees",
        referencedColumnNames: ["id"],
        columnNames: ["employee_id"],
      }
    ]
  })  
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("comandas")
  }
}
