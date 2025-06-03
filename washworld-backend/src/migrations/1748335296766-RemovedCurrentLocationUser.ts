import { MigrationInterface, QueryRunner } from "typeorm";

// Migration to remove the 'currentLocation' column from the 'user' table
export class RemovedCurrentLocationUser1748335296766 implements MigrationInterface {
    name = 'RemovedCurrentLocationUser1748335296766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "currentLocation"`);
    }

    // Revert the migration by adding the 'currentLocation' column back to the 'user' table
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "currentLocation" integer NOT NULL`);
    }

}
