import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Employees1636894498365 implements MigrationInterface {
  public table = new Table({
    name: "employees",
    columns: [
      {
        name: "id",
        type: "uuid",
        isPrimary: true,
        generationStrategy: "uuid"
      },
      {
        name: "restaurant_id",
        type: "uuid",
        isNullable: false
      },
      {
        name: "name",
        type: "varchar",
        isNullable: false,
      },
      {
        name: "username",
        type: "varchar",
        default: false
      },
      {
        name: "password",
        type: "varchar",
        default: false
      },
      {
        name: "permissions",
        type: "json",
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
        name: "EmployeeRestaurantIdFK",
        referencedTableName: "restaurants",
        referencedColumnNames: ["id"],
        columnNames: ["restaurant_id"],
      }
    ]
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("employees")
  }
}
