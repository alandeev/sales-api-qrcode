import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Client1636878978608 implements MigrationInterface {
  public table = new Table({
    name: "clients",
    columns: [
      {
        name: "id",
        type: "uuid",
        isPrimary: true,
        generationStrategy: "uuid"
      },
      {
        name: "created_by",
        type: "uuid",
        isNullable: false
      },
      {
        name: "name",
        type: "varchar",
        isNullable: false
      },
      {
        name: "email",
        type: "varchar",
        isNullable: false,
        isUnique: true
      },
      {
        name: "password",
        type: "varchar",
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
        name: "UserCreatedByFK",
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        columnNames: ["created_by"],
      }
    ]
  })


  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("clients")
  }
}
