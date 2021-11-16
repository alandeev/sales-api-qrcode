import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Product1636933825839 implements MigrationInterface {
    public table = new Table({
      name: "products",
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
          name: "description",
          type: "varchar",
          isNullable: false
        }, 
        {
          name: "price",
          type: "bigint",
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
          name: "ProductRestaurantIdFK",
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
      await queryRunner.dropTable("products")
    }
}