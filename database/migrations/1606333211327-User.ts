import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class User1606333211327 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'user',
            columns: [
              {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
              },
              {
                name: 'name',
                type: 'varchar',
              }, 
              {
                name: 'password',
                type: 'varchar',
              }
            ]
          }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
    }

}
