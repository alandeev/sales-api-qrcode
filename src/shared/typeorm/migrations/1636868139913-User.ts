import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class User1636868139913 implements MigrationInterface {
  public table = new Table({
    name: "users",
    columns: [
      {
        name: "id",
        type: "uuid",
        isPrimary: true,
        generationStrategy: "uuid"
      },
      {
        name: "name",
        type: "varchar",
        isNullable: false
      },
      {
        name: "username",
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
    ]
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users")
  }
}
