import {MigrationInterface, QueryRunner} from "typeorm";

export class Dashboard1607605723550 implements MigrationInterface {
    name = 'Dashboard1607605723550'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_contact" ("id" int PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "subject" varchar NOT NULL, "message" text NOT NULL, "created_at" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP))`);
        await queryRunner.query(`INSERT INTO "temporary_contact"("id", "name", "email", "subject", "message", "created_at") SELECT "id", "name", "email", "subject", "message", "created_at" FROM "contact"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`ALTER TABLE "temporary_contact" RENAME TO "contact"`);
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" int PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "password" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "name", "password") SELECT "id", "name", "password" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
        await queryRunner.query(`CREATE TABLE "dashboard" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" text NOT NULL, "text" text NOT NULL, "image" varchar(200) NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_contact" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(100) NOT NULL, "email" varchar(200) NOT NULL, "subject" varchar(200) NOT NULL, "message" text NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_contact"("id", "name", "email", "subject", "message", "created_at") SELECT "id", "name", "email", "subject", "message", "created_at" FROM "contact"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`ALTER TABLE "temporary_contact" RENAME TO "contact"`);
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(100) NOT NULL, "password" varchar(200) NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "name", "password") SELECT "id", "name", "password" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" int PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "password" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "user"("id", "name", "password") SELECT "id", "name", "password" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
        await queryRunner.query(`ALTER TABLE "contact" RENAME TO "temporary_contact"`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" int PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "subject" varchar NOT NULL, "message" text NOT NULL, "created_at" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP))`);
        await queryRunner.query(`INSERT INTO "contact"("id", "name", "email", "subject", "message", "created_at") SELECT "id", "name", "email", "subject", "message", "created_at" FROM "temporary_contact"`);
        await queryRunner.query(`DROP TABLE "temporary_contact"`);
        await queryRunner.query(`DROP TABLE "dashboard"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" int PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "password" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "user"("id", "name", "password") SELECT "id", "name", "password" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
        await queryRunner.query(`ALTER TABLE "contact" RENAME TO "temporary_contact"`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" int PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "subject" varchar NOT NULL, "message" text NOT NULL, "created_at" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP))`);
        await queryRunner.query(`INSERT INTO "contact"("id", "name", "email", "subject", "message", "created_at") SELECT "id", "name", "email", "subject", "message", "created_at" FROM "temporary_contact"`);
        await queryRunner.query(`DROP TABLE "temporary_contact"`);
    }

}
