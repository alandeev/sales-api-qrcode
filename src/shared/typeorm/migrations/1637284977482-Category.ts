import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Category1637284977482 implements MigrationInterface {
    private table = new Table({
      name: "categories",
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
          name: "restaurant_id",
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
          name: "CategoryRestaurantIdFK",
          referencedTableName: "restaurants",
          referencedColumnNames: ["id"],
          columnNames: ["restaurant_id"],
        },
      ]
    })
  
    public async up(queryRunner: QueryRunner): Promise<void> {
      return queryRunner.createTable(this.table)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      return queryRunner.dropTable("categories")
    }
}
