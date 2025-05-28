import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1748424075713 implements MigrationInterface {
    name = 'Test1748424075713'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "license"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "license" character varying DEFAULT NULL`);
    }

}
