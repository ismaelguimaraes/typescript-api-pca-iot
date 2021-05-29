import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateAttendanceTable1622305654482 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'attendances',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'student',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'presented_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('attendances');
    }

}