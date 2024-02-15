import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1707931451971 implements MigrationInterface {
    name = 'Migration1707931451971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "TransactionsPayments_auth" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "auth_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "access_token" character varying(250) NOT NULL, "expiration_date" TIMESTAMP NOT NULL, "userIdUserId" uuid, CONSTRAINT "REL_f6313d431d3eeb2863899703a8" UNIQUE ("userIdUserId"), CONSTRAINT "PK_e05620ebf7f30df572d28c2d585" PRIMARY KEY ("auth_id"))`);
        await queryRunner.query(`CREATE TABLE "TransactionsPayments_type_documents" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "type_document_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(200) NOT NULL, "userIdUserId" uuid, CONSTRAINT "PK_9f41670b3e8f97fd09f3b733363" PRIMARY KEY ("type_document_id"))`);
        await queryRunner.query(`CREATE TABLE "TransactionsPayments_roles" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "role_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(250) NOT NULL, CONSTRAINT "PK_1621bbf7002f572a6066e727864" PRIMARY KEY ("role_id"))`);
        await queryRunner.query(`CREATE TABLE "TransactionsPayments_roles_users" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "user" uuid NOT NULL, "role_id" uuid NOT NULL, "userUserId" uuid, "roleIdRoleId" uuid, CONSTRAINT "PK_d7c0a216f3ee2c02bfd6f6f74ea" PRIMARY KEY ("user", "role_id"))`);
        await queryRunner.query(`CREATE TABLE "TransactionsPayments_auth_refresh" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "auth_refresh_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "refresh_token" character varying(250) NOT NULL, "expiration_date" TIMESTAMP NOT NULL, "userIdUserId" uuid, CONSTRAINT "REL_c7c2b0145584e75ff30b39f979" UNIQUE ("userIdUserId"), CONSTRAINT "PK_6a71aef97be58dd11f473c6bd20" PRIMARY KEY ("auth_refresh_id"))`);
        await queryRunner.query(`CREATE TABLE "TransactionsPayments_passwords" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "password_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "password" character varying(250) NOT NULL, "salt" character varying(250) NOT NULL, "is_vigent" boolean NOT NULL, "userIdUserId" uuid, CONSTRAINT "PK_43088eec4a09c54d8dd7c07d4e8" PRIMARY KEY ("password_id"))`);
        await queryRunner.query(`CREATE TABLE "TransactionsPayments_products" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "product_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, CONSTRAINT "PK_d06e970b943b4654bc8481ef978" PRIMARY KEY ("product_id"))`);
        await queryRunner.query(`CREATE TABLE "TransactionsPayments_products_users" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "product_id" uuid NOT NULL, "user_id" uuid NOT NULL, "productIdProductId" uuid, "userIdUserId" uuid, CONSTRAINT "PK_17e9788018898606ab59fea5fd8" PRIMARY KEY ("product_id", "user_id"))`);
        await queryRunner.query(`CREATE TABLE "TransactionsPayments_users" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "names" character varying(100) NOT NULL, "surnames" character varying(100) NOT NULL, "nikname" character varying(200) NOT NULL, CONSTRAINT "PK_95435c705833287c8db1a69c659" PRIMARY KEY ("user_id"))`);
        await queryRunner.query(`CREATE TABLE "TransactionsPayments_user_details" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "user_detail_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "country" character varying(100) NOT NULL, "city" character varying(100) NOT NULL, "cell_phone" integer NOT NULL, "direction" character varying(100) NOT NULL DEFAULT '', "summary" character varying(100) NOT NULL DEFAULT '', "date_birthday" TIMESTAMP NOT NULL, "userIdUserId" uuid, CONSTRAINT "PK_b0aaaf1d2c1707b1a6520c20137" PRIMARY KEY ("user_detail_id"))`);
        await queryRunner.query(`ALTER TABLE "TransactionsPayments_auth" ADD CONSTRAINT "FK_f6313d431d3eeb2863899703a82" FOREIGN KEY ("userIdUserId") REFERENCES "TransactionsPayments_users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "TransactionsPayments_type_documents" ADD CONSTRAINT "FK_d5dd89a24e7f0af9f514970e794" FOREIGN KEY ("userIdUserId") REFERENCES "TransactionsPayments_users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "TransactionsPayments_roles_users" ADD CONSTRAINT "FK_586959411d95c7fc31adb044cd7" FOREIGN KEY ("userUserId") REFERENCES "TransactionsPayments_users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "TransactionsPayments_roles_users" ADD CONSTRAINT "FK_1ca7ef1a34d81cb03f0e12733d8" FOREIGN KEY ("roleIdRoleId") REFERENCES "TransactionsPayments_roles"("role_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "TransactionsPayments_auth_refresh" ADD CONSTRAINT "FK_c7c2b0145584e75ff30b39f9793" FOREIGN KEY ("userIdUserId") REFERENCES "TransactionsPayments_users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "TransactionsPayments_passwords" ADD CONSTRAINT "FK_1b8fceb9358f91073cf27931b4b" FOREIGN KEY ("userIdUserId") REFERENCES "TransactionsPayments_users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "TransactionsPayments_products_users" ADD CONSTRAINT "FK_7c00027e6d2c29f8d899f42d6d4" FOREIGN KEY ("productIdProductId") REFERENCES "TransactionsPayments_products"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "TransactionsPayments_products_users" ADD CONSTRAINT "FK_78a9e764688775e03d6556a2b65" FOREIGN KEY ("userIdUserId") REFERENCES "TransactionsPayments_users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "TransactionsPayments_user_details" ADD CONSTRAINT "FK_24f2ea487b43ba5020575e11bfd" FOREIGN KEY ("userIdUserId") REFERENCES "TransactionsPayments_users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "TransactionsPayments_user_details" DROP CONSTRAINT "FK_24f2ea487b43ba5020575e11bfd"`);
        await queryRunner.query(`ALTER TABLE "TransactionsPayments_products_users" DROP CONSTRAINT "FK_78a9e764688775e03d6556a2b65"`);
        await queryRunner.query(`ALTER TABLE "TransactionsPayments_products_users" DROP CONSTRAINT "FK_7c00027e6d2c29f8d899f42d6d4"`);
        await queryRunner.query(`ALTER TABLE "TransactionsPayments_passwords" DROP CONSTRAINT "FK_1b8fceb9358f91073cf27931b4b"`);
        await queryRunner.query(`ALTER TABLE "TransactionsPayments_auth_refresh" DROP CONSTRAINT "FK_c7c2b0145584e75ff30b39f9793"`);
        await queryRunner.query(`ALTER TABLE "TransactionsPayments_roles_users" DROP CONSTRAINT "FK_1ca7ef1a34d81cb03f0e12733d8"`);
        await queryRunner.query(`ALTER TABLE "TransactionsPayments_roles_users" DROP CONSTRAINT "FK_586959411d95c7fc31adb044cd7"`);
        await queryRunner.query(`ALTER TABLE "TransactionsPayments_type_documents" DROP CONSTRAINT "FK_d5dd89a24e7f0af9f514970e794"`);
        await queryRunner.query(`ALTER TABLE "TransactionsPayments_auth" DROP CONSTRAINT "FK_f6313d431d3eeb2863899703a82"`);
        await queryRunner.query(`DROP TABLE "TransactionsPayments_user_details"`);
        await queryRunner.query(`DROP TABLE "TransactionsPayments_users"`);
        await queryRunner.query(`DROP TABLE "TransactionsPayments_products_users"`);
        await queryRunner.query(`DROP TABLE "TransactionsPayments_products"`);
        await queryRunner.query(`DROP TABLE "TransactionsPayments_passwords"`);
        await queryRunner.query(`DROP TABLE "TransactionsPayments_auth_refresh"`);
        await queryRunner.query(`DROP TABLE "TransactionsPayments_roles_users"`);
        await queryRunner.query(`DROP TABLE "TransactionsPayments_roles"`);
        await queryRunner.query(`DROP TABLE "TransactionsPayments_type_documents"`);
        await queryRunner.query(`DROP TABLE "TransactionsPayments_auth"`);
    }

}
