import { MigrationInterface, QueryRunner } from "typeorm";

export class RemovedCurrentLocationUser1748335296766 implements MigrationInterface {
    name = 'RemovedCurrentLocationUser1748335296766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "currentLocation"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "currentLocation" integer NOT NULL`);
    }

}
